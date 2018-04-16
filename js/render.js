function doRender() {
    var chooseVal = document.getElementById('choose-id').value;
    var node;
    if(chooseVal.startsWith('cid:')) { // 根据classId获取标签
        chooseVal = chooseVal.substring(4);
        var splitIndex = chooseVal.indexOf('#');
        var index = 0;
        if(splitIndex > 0) {
            index = chooseVal.substring(splitIndex + 1);
            chooseVal = chooseVal.substring(0, splitIndex);
        }
        node = document.getElementsByClassName(chooseVal)[parseInt(index)];
    } else {
        if(chooseVal.startsWith("id:")) {
            chooseVal = chooseVal.substring(3);
        }

        if ("" == chooseVal) {
            return;
        }

        node = document.getElementById(chooseVal);
    }

    if(node == null || typeof(node) == undefined) {
        alert("没有选中的dom结构");
        return;
    }

    domtoimage.toPng(node)
        .then(function (dataUrl) {
                bw.toast('渲染node成功!');
                var url = dataUrl;
                window.open().document.write('<html><head><title>渲染图</title></head><body>'
                                            + '<div style=\'text-align:center\'>'
                                            + '<a download="out.png" href="' + url + '"><img id="outImg" src="' + url + '" /></a>'
                                            + '</div></body></html>');
        
        })
        .catch(function (error) {});
}


function copyImg(e) {
    var range = document.createRange();
    range.selectNode(e);
    window.getSelection().addRange(range);
    document.execCommand("Copy");
    bw.toast('渲染图片已复制到粘贴板!');
}



var bw = {};
bw.list = [];
bw.toast = function( txt ){
    var i = 38;
    if( bw.list.length ){
        bw.list.forEach( function(element, index) {
            element.setAttribute('style', 'bottom: '+(bw.list.length-index)*i+'px;');
        });
    }
    var toast = document.createElement('div');
    toast.classList = 'bw-toast';
    toast.setAttribute('style', 'bottom: -36px;');

    var msg = document.createTextNode(txt);
    toast.append(msg);
    bw.list.push(toast);
    document.body.append(toast);

    setTimeout(function(){
        toast.setAttribute('style', 'bottom: 0px;');
    }, 0)
    setTimeout(function(){
        toast.parentNode.removeChild(toast);
        bw.list.shift();
    }, 2000)
}