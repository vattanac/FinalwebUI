
  var isActived = true;
  var printid = $("#print-point");
$(document).ready(function () {
  
   $("#pp").click(function(){
       printInfo(printid);
       alert("PRint");
   })
    $("#printhere").click(function(){
        printpaper(printid);
        // $("#print-point").printThis();
    })
    printpaper(printid);
 
    $('#love').click(function () {
        if (isActived == true) {
          
            $('#love').removeClass("far fa-heart");
            $('#love').addClass("fas fa-heart");
            isActived = false;
           
        } else{

            $('#love').removeClass("fas fa-heart");
            $('#love').addClass("far fa-heart");
            isActived = true;
           
        }
    })
})

function printInfo(ele) {
    var openWindow = window.open("", "title", "attributes");
    openWindow.document.write(ele.previousSibling.innerHTML);
    openWindow.document.close();
    openWindow.focus();
    openWindow.print();
    openWindow.close();
}

function printpaper(printID){
    var prtContent = document.getElementById(printID);
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write();
    // WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}
