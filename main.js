 window.addEventListener("message", function (e) {
     if (e.origin === "https://www.facebook.com") {
         if (typeof e.data === "string" && e.data.indexOf("&domain=") > - 1) {
            
            var split = e.data.split("&");
             
             if (split.includes("type=mpn.toggleDialogVisibility")) {
                 var idx = split.findIndex(function(item) {
                     return item === "type=mpn.toggleDialogVisibility"
                 });

                 var shouldHide = split[idx + 1].split("=").pop();
                 // due to msg plugin will send shoudHide we have to reverse them for easy to use
                 if (shouldHide == "false") {
                     dataLayer.push({event: "show_chat_msg", state: true})
                 } else {
                     dataLayer.push({event: "show_chat_msg", state: false})
                 }
             }
             
         }
     }
 });
