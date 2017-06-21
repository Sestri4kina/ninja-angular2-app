import { NinjaAppPage } from './app.po';

describe('ninja-app App', () => {
  let page: NinjaAppPage;

  beforeEach(() => {
    page = new NinjaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
