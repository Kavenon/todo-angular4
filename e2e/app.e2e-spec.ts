import { TodoAngular4Page } from './app.po';

describe('todo-angular4 App', function() {
  let page: TodoAngular4Page;

  beforeEach(() => {
    page = new TodoAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
