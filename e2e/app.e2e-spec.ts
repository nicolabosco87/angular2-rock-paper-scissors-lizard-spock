import { browser, element, by } from 'protractor';

describe('angular2-rock-paper-scissors-lizard-spock App', function() {

  it('should display start game button', () => {
    browser.get('/');
    expect(element(by.css('game board button')).getText()).toEqual('Start Game!');
  });

  it('should start a new game', () => {
    browser.get('/');
    element(by.css('game board button')).click();

    expect(element(by.css('h2')).getText()).toEqual('Choose a move!');
  });

  it('should complete a match step', () => {
    browser.get('/');
    element(by.css('game board button')).click();
    element(by.css('game board .btn-group .btn:first-of-type')).click();
    let alertMatchStep = element.all(by.css('game board .alert.alert--match-step')).count();

    expect(alertMatchStep).toBe(1);
  });

});


