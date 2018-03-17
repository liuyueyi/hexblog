function showOrHide(cname, expandId, defaultStyle) {
  var nodes = document.getElementsByClassName(cname);
  var style = nodes[0].style.display.trim();
  var s = 'none';

  if(style == '' || style == ' ') {
      s = defaultStyle;
  }

  if(style == 'none') {
    s = 'block';
  }
  if(s === 'none') {
    document.getElementById(expandId).innerText = ' 点击展开 ';
  } else {
    document.getElementById(expandId).innerText = ' 点击收起 ';
  }
  for (var i in nodes) {
     if(typeof(nodes[i]) == 'object') {
        nodes[i].style.display = s;
     }
  }
}

function addImgClickEvent()
{
  var objs = document.getElementsByTagName("img");
  for(var i=0;i<objs.length;i++)
  {
    objs[i].onclick=function()
    {
      window.open(this.src);
    }
    objs[i].style.cursor = "pointer";
  }
}

addImgClickEvent();