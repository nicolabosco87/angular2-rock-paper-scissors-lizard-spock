import { Angular2RockPaperScissorsLizardSpockPage } from './app.po';

describe('angular2-rock-paper-scissors-lizard-spock App', function() {
  let page: Angular2RockPaperScissorsLizardSpockPage;

  beforeEach(() => {
    page = new Angular2RockPaperScissorsLizardSpockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
