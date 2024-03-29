class WhatsAppController{
    constructor(){
        console.log('WhatsAppController ok')
        this.elementsPrototype();
        this.loadElements();
        this.initEvents();
    }

    loadElements(){
        this.el = {};
        document.querySelectorAll('[id]').forEach(element=>{
            this.el[Format.getCamelCase(element.id)] = element;
        })
    }
    elementsPrototype(){
        Element.prototype.hide = function(){
            this.style.display = 'none'; 
            return this;
        }
        Element.prototype.show = function(){
            this.style.display = 'block'; 
            return this;
        }
        Element.prototype.toggle = function(){
            this.style.display = (this.style.display === 'none') ? 'block':'none'; 
            return this;
        }

        Element.prototype.on = function(events, fn){
            events.split(" ").forEach(event=>{
                this.addEventListener(event, fn);
            })     
            return this;
        }

        Element.prototype.css = function(style){
            for (let name in styles){
                this.style[name] = style[name];
            }
            return this;
        }

        Element.prototype.addClass = function(name){
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function(name){
            this.classList.remove(name);
        }

        Element.prototype.hasClass = function(name){
            return this.classList.contains(name);
        }
         
    }  
    initEvents(){     
        this.el.myPhoto.on("click", e=>{
            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            this.el.panelEditProfile.addClass("open");
            console.log("open");
        });

        this.el.btnNewContact.on("click", e=>{
            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            this.el.panelAddContact.addClass("open");
        });

        this.el.btnClosePanelEditProfile.on("click", e=>{
            this.el.panelEditProfile.removeClass("open");
            console.log("close");
        });
        this.el.btnClosePanelAddContact.on("click", e =>{
            this.el.panelAddContact.removeClass("open");
        });
        this.el.photoContainerEditProfile.on("click", e=>{
            this.el.inputProfilePhoto.click();
        });
        this.el.inputNamePanelEditProfile.on("keypress", e=>{
            if(e.key == "Enter"){
                e.preventDefault();
                this.el.btnSavePanelEditProfile.click();
            }
        });
        this.el.btnSavePanelEditProfile.on('click', e=>{
            console.log(this.el.inputNamePanelEditProfile.innerHTML);
        })
    }

    closeAllLeftPanel(){
            this.el.panelAddContact.hide();
            this.el.panelEditProfile.hide();  
    }
    
}