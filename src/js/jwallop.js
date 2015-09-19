function JWallop(sectionID, options, useDots, onChangeFunc) {
    //Defaults and self
    var self = this;
    this.onChangeFunc = onChangeFunc || function() {};
    this.useDots = (useDots === true) ? true : false
    //useDots can be true or false - defaults to false
    
    this.wallop = new Wallop(document.getElementById(sectionID), options);

    if (this.useDots){
        //Get dots
        this.paginationDots = Array.prototype.slice.call(document.getElementById(sectionID).querySelectorAll('.Wallop-dot'));
        console.log(this.paginationDots);
        /*
        Attach click listener on the dots
        */
        this.paginationDots.forEach(function(dotEl, index) {
            dotEl.addEventListener('click', function() {
                self.wallop.goTo(index);
            });
        });
    }
    /*
    Listen to wallop change and update classes
    */
    this.wallop.on('change', function(event) {
        //var sectionID = $(event.detail.wallopEl).attr("id");
        sectionID = event.detail.wallopEl.getAttribute("id");
        console.log("on change sectionID: " + sectionID);
        self.onChangeFunc(event);

        //$('.Wallop-dot--current', $(event.detail.wallopEl)).removeClass("Wallop-dot--current");
        if (self.useDots){
            self.removeClass(document.getElementById(sectionID).querySelector('.Wallop-dot--current'),
                'Wallop-dot--current');
            self.addClass(self.paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
        }
    });

    //helper classes
    this.addClass = function(element, className) {
        if (!element) {
            return;
        }
        element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
    }
    this.removeClass = function(element, className) {
        if (!element) {
            return;
        }
        element.className = element.className.replace(className, '');
    }
}
