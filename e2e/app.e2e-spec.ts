import { RecipeBookAngular2Page } from './app.po';

describe('recipe-book-angular2 App', function() {
  let page: RecipeBookAngular2Page;

  beforeEach(() => {
    page = new RecipeBookAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
