'use strict';

describe('Integration tests: movieDB', function () {

  describe('catalog', function(){
    beforeEach(function(){
      browser.get('/#');
    });

    it('should render the catalog page when user navigates to /', function(){
      expect(browser.getCurrentUrl()).toMatch('\/#');
    });

    it('should take you to the genre catalog when you click a link on the genre list', function(){
      var link = element(by.css('.list-group-item:nth-child(2)'));
      link.click();
      expect(browser.getCurrentUrl()).toMatch('\/genre\/Action');
    });

  });

  describe('movie', function(){ 

    beforeEach(function(){ 
      browser.get('/#/movie/222935');
    });

    it('should render the movies details page', function(){
      var ele = by.css('.moviedetails');
      expect(browser.isElementPresent(ele)).toBe(true);
    });

    it('should take you back to the movie galery when you click Return to Catalog', function(){
      var link = element(by.css('.return-btn'));
      link.click();
      expect(browser.getCurrentUrl()).toMatch('\/#');
    });

  });


});