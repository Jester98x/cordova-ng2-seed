import { TestNgPage } from './app.po';

describe('taco-cli-seed App', function () {
    let page: TestNgPage;

    beforeEach(() => {
        page = new TestNgPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
