$(function() {
	//問題1
	$('#get_name').on("click", function(){
		$('#subject01_result').html($('#yamada_name').html());
	});


	//問題2-1
	$('#add_sakurako').on("click", function(){
		$('#member_list').append($('<li />', {text:'櫻子'}));
	});

	//問題2-2
	$('#add_himawari').on("click", function(){
		$('#member_list').append($('<li />', {text:'向日葵'}));
	});

	//問題3
	$('#remove_akari').on("click", function(){
		$('#member_list_remove > li').each(function(){
			if($(this).text().match(/^あかり$/)){$(this).remove()};
		});
	});

	//問題4
	$('#change_visible_momo').on("click", function(){
		var target = $('#stealth_momo');
		if(target.css("display") == 'none'){
			target.show();
		} else {
			target.hide();
		};
	});

	//問題5
	var mondai5 = false;
	$('#change_header_html').on("click", function(){
		if(!mondai5){
			$("h2").each(function(){
				$(this).text("【" + $(this).text() + "】");
			});
			mondai5 = true;
		}
	});
});