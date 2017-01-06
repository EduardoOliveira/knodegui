import { KnodeguiPage } from './app.po';

describe('knodegui App', function() {
  let page: KnodeguiPage;

  beforeEach(() => {
    page = new KnodeguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
