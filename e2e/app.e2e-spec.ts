import { Angualr2AppBalajiPage } from './app.po';

describe('angualr2-app-balaji App', () => {
  let page: Angualr2AppBalajiPage;

  beforeEach(() => {
    page = new Angualr2AppBalajiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
