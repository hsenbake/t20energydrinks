!function(e){e.fn.forms=function(t){return this.each(function(){var a=e(this),r=a.data("forms")||{errorCl:"error",emptyCl:"empty",invalidCl:"invalid",notRequiredCl:"notRequired",successCl:"success",successShow:"4000",mailHandlerURL:"/welcome/contact_form",ownerEmail:"support@template-help.com",stripHTML:!0,smtpMailServer:"localhost",targets:"input,textarea",controls:"a[data-type=reset],a[data-type=submit]",validate:!0,rx:{".name":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:"input"},".state":{rx:/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,target:"input"},".email":{rx:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,target:"input"},".phone":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:"input"},".fax":{rx:/^\+?(\d[\d\-\+\(\) ]{5,}\d$)/,target:"input"},".message":{rx:/.{20}/,target:"textarea"}},preFu:function(){r.labels.each(function(){var t=e(this),a=e(r.targets,this),i=a.val(),n=function(){var e=a.is("input")?(e=t.html().match(/value=['"](.+?)['"].+/),!!e&&!!e[1]&&e[1]):a.html();return""==i?i:e}();n!=i&&a.val(i=n||i),t.data({defVal:i}),a.bind("focus",function(){a.val()==i&&(a.val(""),r.hideEmptyFu(t),t.removeClass(r.invalidCl))}).bind("blur",function(){r.validateFu(t),r.isEmpty(t)&&(a.val(i),r.hideErrorFu(t.removeClass(r.invalidCl)))}).bind("keyup",function(){t.hasClass(r.invalidCl)&&r.validateFu(t)}),t.find("."+r.errorCl+",."+r.emptyCl).css({display:"block"}).hide()}),r.success=e("."+r.successCl,r.form).hide()},isRequired:function(e){return!e.hasClass(r.notRequiredCl)},isValid:function(t){var a=!0;return e.each(r.rx,function(e,r){t.is(e)&&(a=r.rx.test(t.find(r.target).val()))}),a},isEmpty:function(e){var t;return""==(t=e.find(r.targets).val())||t==e.data("defVal")},validateFu:function(t){t.each(function(){var t=e(this),a=r.isRequired(t),i=r.isEmpty(t),n=r.isValid(t);i&&a?r.showEmptyFu(t.addClass(r.invalidCl)):r.hideEmptyFu(t.removeClass(r.invalidCl)),i||(n?r.hideErrorFu(t.removeClass(r.invalidCl)):r.showErrorFu(t.addClass(r.invalidCl)))})},getValFromLabel:function(t){var a=e("input,textarea",t).val(),r=t.data("defVal");return t.length?a==r?"nope":a:"nope"},submitFu:function(){r.validateFu(r.labels),r.form.has("."+r.invalidCl).length||e.ajax({type:"POST",url:r.mailHandlerURL,data:{name:r.getValFromLabel(e(".name",r.form)),email:r.getValFromLabel(e(".email",r.form)),phone:r.getValFromLabel(e(".phone",r.form)),fax:r.getValFromLabel(e(".fax",r.form)),state:r.getValFromLabel(e(".state",r.form)),message:r.getValFromLabel(e(".message",r.form)),owner_email:r.ownerEmail,stripHTML:r.stripHTML},success:function(){r.showFu()}})},showFu:function(){r.success.slideDown(function(){setTimeout(function(){r.success.slideUp(),r.form.trigger("reset")},r.successShow)})},controlsFu:function(){e(r.controls,r.form).each(function(){var t=e(this);t.bind("click",function(){return r.form.trigger(t.data("type")),!1})})},showErrorFu:function(e){e.find("."+r.errorCl).slideDown()},hideErrorFu:function(e){e.find("."+r.errorCl).slideUp()},showEmptyFu:function(e){e.find("."+r.emptyCl).slideDown(),r.hideErrorFu(e)},hideEmptyFu:function(e){e.find("."+r.emptyCl).slideUp()},init:function(){r.form=r.me,r.labels=e("label",r.form),r.preFu(),r.controlsFu(),r.form.bind("submit",function(){return r.validate?r.submitFu():r.form[0].submit(),!1}).bind("reset",function(){r.labels.removeClass(r.invalidCl),r.labels.each(function(){var t=e(this);r.hideErrorFu(t),r.hideEmptyFu(t)})}),r.form.trigger("reset")}};r.me||r.init(r.me=a.data({forms:r})),"object"==typeof t&&e.extend(r,t)})}}(jQuery),$(window).load(function(){$("#form").forms({ownerEmail:"#"})});