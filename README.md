# mytoy
try to skip the video ad in iqiyi.com
lear jQuery html5 example:
http://www.runoob.com/try/try.php?filename=tryhtml5_global_data
http://www.open-open.com/solution/view/1320130602609
$(document).ready(function(){
  $("div").each(function(){
	var ID = $(this).data('awesome');
	if(ID != undefined )
	{
		$.ajax({ 
			url: $(this).text(), 
			success: function(msg){
				$(this).data(msg + "hehe");
		}});
	}
  });
});
