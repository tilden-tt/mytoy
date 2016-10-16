
function clicklike()
{
	var suspectpicture = document.getElementsByTagName("a");

	for(var i=0; i<suspectpicture.length;i++)
	{
		if(suspectpicture[i].className == "link-layer cover-link")
		{
			//alert("link-layer cover-link");
			//suspectpicture[i].click();
			//suspectpicture[i].onmouseover();
			$.ajax({
                    url: "/dish/" + 120996985 + "/digg/",
                    type: "POST",
                    dataType: "json",
                    data: {
                        xf: xf()
                    }
                }).done(function(t) {
                    if (t.status === "error") {
                        return alert("你赞的太多了，休息一下吧")
                    }
					else{
					return alert("link-layer cover-link");
					}
                })
			break;	
		}
	}
}
clicklike();
