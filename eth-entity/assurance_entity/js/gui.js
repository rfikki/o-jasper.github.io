// Before creation: control: create button.
//
// After, show:
// * Creator & recipient.
// * End time(TODO get out of end-block way of showing.)
// * Minimum and maximum input value.
// * Funders.
// * Something from the creator.(TODO so kindah need a bit of text added..)
//
// control:
// * Refund button.
// * Putting coin in.
//

els = { // Elements.
    els : {},
    
    ge : function(id) {
        if( this.els[id] == undefined ){ // Setting `els` manually overrides.
            this.els[id] = document.getElementById(id);
        }
        return this.els[id];
    } 

    addr_note : function(id, value = null, must_own=null) {
        if( value == null ){ value = hexify(els.ge(id).value); }
        var note = ge(id + "_note");            
        if( !is_addr(value) ){
            note.innerText = "Not an address"; note.className = "invalid";
            return null;
        }
        if(must_own && got_privkey(value)==null) {
            note.innerText = "Dont have privkey"; note.className = "warn";
            if(must_own == "validity") {
                return null; 
            } else {
                return value;
            }
        }
        note.innerText = ""; note.className = "";
        return value;
    }

    int_note : function(id) {
        var string = els.ge(id).value;
        if( !is_int(string) ){ 
            var note = ge(id + "_note");
            note.innerText = "Not an integer"; note.className = "invalid";
            return null;
        }
        return parseInt(string);
    }
}

function new_crowdfund_gui()  {
    return {
        crowdfund : null,
        // Prevent wrong inputs to passing along. (only disable for testing)
        safety : true,
        
        // Inputs. Creation:
        creator_input : function() {
            return els.addr_note("creator_input", null, true);
        }
        
        recipient_input : function() {
            return els.addr_note("recipient_input");
        }
        
        endtime_input : function() {
            return els.int_note("endtime_input");
            // TODO extreme time range warnings.
        }

        // Funding:
        amount_input : function() {
            return els.int_note("endtime_input");
            //TODO amounts warnings.
        }
        from_input : function() {
            return els.addr_note("from_input", null, "validity");
        }
        
        // Doing stuff(using inputs
        run_create : function() {
            var creator   = this.creator_input();
            var recipient = this.recipient_input();
            var endtime   = this.endtime_input();

            if( this.safety ){
                var wrongs = ["Wrong:"];
                if( creator == null ){ wrongs.push("* creator input\n"); }
                if( recipient == null ){ wrongs.push("* recipient input\n"); }
                if( endtime == null ){ wrongs.push("* end time"); }
                if( wrongs.length > 1 ){ alert(wrongs); return; )
            }            
            this.crowdfund.do_create(creator, recipient, endtime);
        }

        run_fund : function() {
            var amount = this.amount_input(), from = this.from_input();
            if( this.safety ) {
                if( amount == null ){ alert("Not a valid amount input."); }
                if( from == null ){ alert("Not a valid from input."); }
            }
            this.crowdfund.do_fund(amount);
        }

        run_refund : function() {
            this.crowdfud.do_refund();
        }
    }
}
