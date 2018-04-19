const LolCatService = require('./lolcat');
const nock = require('nock');

describe('LolCatService', () => {
  let lolCatService;
  const htmlSnippet = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="Translate English into lolcat - the language of all cute animals and pets. Docta dolittle eat ur hart out!" />
      <meta name="keywords" content="lolcat,icanhascheezburger,speak,translate,kitteh,language,english,meme,fad,cat,dog,pet,lolcode,fun,macro,convert,ur,lol" />
      <title>speak lolcat - lolcat translator</title>
    </head>
    <body>
      <div class="gas">
        <script type="text/javascript"><!--
        google_ad_client = "pub-8105837634715403";
        google_ad_width = 160;
        google_ad_height = 600;
        google_ad_format = "160x600_as";
        google_cpa_choice = "CAEaCI-Lj8_khXuIOAFQtwNQAw";
        google_kw = "pet, cat, dog";
        google_kw_type = "broad";
        //-->
        </script>
        <script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
        </script>
      </div>
      <h1>learn to speak lolcat: the lolcat translator</h1>
      <h2>lolcat is a made up language that is said to be spoken by fluffy animals such as pets.
        Your vet won't have heard of it, because it's not real - animals can't talk.
        But if they could, wouldn't you love to know how to communicate with them? Or maybe you just want to speak lolcat because it's funny.
        Give it a try! U mite liek it?
      </h2>
      <div id="content">
        <div id="text">
          <p>HELLO WORLD</p>
          <p>Y HALO THAR WURLD</p>
        </div>
        <form action="" method="get" accept-charset="utf-8">
          <p>
            <label for="from">ENGLISH</label><br />
            <textarea name="from" id="from" rows="3" cols="30">HELLO WORLD</textarea><br />
            <input type="submit" value="Translate" />
          </p>
          <p>
            <label for="to">LOLCAT</label><br />
            <textarea id="to" rows="3" cols="30">Y HALO THAR WURLD</textarea>
          </p>
        </form>
        <p id="halp">
          YOU HAS BAD TRANLASHUN? <a href="#" onclick="reveal()">HALP US IMPROOV</a><br />
        </p>
        <div id="reveal">
          <form action="" method="post" accept-charset="utf-8">
            <input type="hidden" name="action" value="report" />
            <input type="hidden" name="from" value="HELLO WORLD" />
            <input type="hidden" name="to" value="Y HALO THAR WURLD" />
            <p>
              <label for="better"><strong>ENTR UR BETTR TRANLASHUN HERE:</strong></label><br />
              <textarea name="better" id="better" rows="3" cols="30">Y HALO THAR WURLD</textarea><br />
              <input type="submit" value="SEND 2 US BETTR VERSHUN, K THNX" />
            </p>
          </form>
        </div>
      </div>
    </body>
  </html>
  `;

  beforeEach(() => {
    lolCatService = new LolCatService();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should exist', () => {
    expect(LolCatService).toBeTruthy();
  });

  it('should create a valid instance', () => {
    expect(lolCatService.constructor).toBe(LolCatService);
  });

  it('should get translation from HTML', () => {
    expect(lolCatService.parseLols(htmlSnippet)).toBe('Y HALO THAR WURLD');
  });

  it('should translate from English to Lolspeak (actual call)', async (done) => {
    const lolSpeak = await lolCatService.tranzlate('Hello World');
    expect(lolSpeak).toBe('Y HALO THAR WURLD');
    done();
  });

  it('should make a build a valid request from English', () => {
    const expectedUrl = `http://speaklolcat.com/?from=Hello World`;
    const url = lolCatService.buildUrl('Hello World');
    expect(url).toBe(expectedUrl);
  });

  it('should translate from English to Lolspeak (spyOn)', async (done) => {
    spyOn(lolCatService, 'makRequest').andCallFake(() => {
      return {
        data: htmlSnippet
      };
    });
    const lolSpeak = await lolCatService.tranzlate('Hello World');
    expect(lolSpeak).toBe('Y HALO THAR WURLD');
    done();
  });

  it('should translate from English to Lolspeak (mock)', async (done) => {
    nock('http://speaklolcat.com')
      .get(/\/(.)*/)
      .reply(() => {
        return htmlSnippet;
      });
    const lolSpeak = await lolCatService.tranzlate('Hello World');
    expect(lolSpeak).toBe('Y HALO THAR WURLD');
    nock.cleanAll();
    done();
  });
});