import { HeroesappPage } from './app.po';

describe('heroesapp App', () => {
  let page: HeroesappPage;

  beforeEach(() => {
    page = new HeroesappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
