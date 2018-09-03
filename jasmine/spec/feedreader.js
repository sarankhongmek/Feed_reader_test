/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {


        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


    
        it('has a URL', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });




        it('Feed has a name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });


    });

    describe('The menu', function(){
        const bodyElement = document.querySelector('body');


        it('is hidden', function(){
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
        });


        it('show and hide', function(){
            $('a.menu-icon-link').click();
            expect(bodyElement.classList.contains('menu-hidden')).toBe(false);



            $('a.menu-icon-link').click();
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);

        })
    });



    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0,done);
        });


         it('should have at least a single .entry element in the .feed container', function(){
            const entry = document.querySelectorAll('.feed .entry');
            expect(entry.length).not.toBe(0);

         });

    });



    describe('New feed Selection',function(){

         var oldFeed;

         beforeEach(function(done){
            loadFeed(0,function(){
                oldFeed = $('.feed').html();
                loadFeed(1, done);
            });
         });


         it('should change content when new feed is loaded', function(){
            expect($('.feed').html()).not.toBe(oldFeed);
         });

    });
}());







