(function() {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function () {
    if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
        var result = JSON.parse(xmlhttp.responseText);
        if (result.status.code == 200) {
          result = result.result;
          var node = document.getElementById("self_count_cnt");
          node.innerHTML = '<br/>本站总访量: <span class="visit_cnt">' + result.appVO.hot + '</span> &nbsp;| 总访问人次: <span class="visit_cnt">' + result.appVO.uv + '</span> &nbsp;| 恭喜您为第 <span class="visit_cnt">' + result.appVO.rank + '</span>&nbsp; 访问者' ;
            
          var pageCntNode = document.getElementById('busuanzi_container_page_pv');
          if(pageCntNode) {
              pageCntNode.innerHTML = '访问统计 <span class="visit_post_cnt"> ( pv : ' + result.uriVO.pv + ' &nbsp;| uv : ' + result.uriVO.uv + ' &nbsp;| hot : ' + result.uriVO.hot + '&nbsp;)</span>';
          }
        }
    }
  }
  xmlhttp.open('GET','https://story.hhui.top/count/ncc?appKey=blog&referer=' + decodeURI(window.location.href))
  xmlhttp.send()
})();