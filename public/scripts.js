"use strict";!function(e){let t;function a(){e(".remove").on("click",function(a){const l=e(this).attr("data-val");e.ajax({url:`${t}/${l}`,method:"DELETE",success:t=>{e(".alert-success").text(`Deleted ${l} from database`),e(".alert-success").show().delay(5e3).fadeOut(),d(t)},error:()=>{e(".alert-danger").text(`Failed to delete ${l}`),e(".alert-danger").show().delay(5e3).fadeOut()}})})}function d(t){e(".list").empty(),t.data.forEach(t=>{const a=`<div class="row list-row">\n         <span class="glyphicon glyphicon-remove remove" data-val="${t.value}"></span>\n         <span class="list-title">${t.value}</span>\n      </div>`;e(".list").append(a)}),a()}e("#AddSource").length>0&&(t=e("#AddSource").attr("data-url"),e(".add").keypress(a=>{if(13===a.which){const a=e(".add").val();console.log(a),e(".add").val(""),e.ajax({url:t,method:"POST",data:{data:a},success:t=>{e(".alert-success").text(`Added ${a} to twitter database`),e(".alert-success").show().delay(5e3).fadeOut(),d(t)},error:(t,a,d)=>{e(".alert-danger").text("Failed to add user"),e(".alert-danger").show().delay(5e3).fadeOut()}})}}),a())}($),$("#Entries").length>0&&console.log("Entries"),$("#Home").length,$("#launch").length>0&&$.scrollTo(0,1),function(e){e("#Metamask").length>0&&window.addEventListener("load",()=>{"undefined"!=typeof web3?web3.eth.accounts.length>0?e(".good").toggle():e(".unlock").toggle():e(".install").toggle()})}($),window.addEventListener("load",()=>{"undefined"!=typeof web3?window.web3=new Web3(web3.currentProvider):$("html").addClass("getmeta")});