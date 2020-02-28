
		bannerText = new Array();
		bannerText[0]='يمكنك عرض وتحميل أحدث نسخة لدليل المستخدم، تحديثات برنامج التشغيل وأسئلة وأجوبة وحلول مفيدة للمنتج';
		bannerText[1]='اختر لوازم واكسسوارات براذر الاصلية للحفاظ على جودة براذر الحقيقية';
		bannerText[2]='وقفة واحدة لمركز موارد مجانية  للمشاريع الإبداعية';
		bannerText[3]='ببضع دقائق للتسجيل، يمكنك ان تتمتع بخدمة أسرع ودعم  أكثر كفاءة .';
		bannerText[4]='';
		function chgText(objId,IDnum) {
			if (document.getElementById(objId)!=null){
			document.getElementById(objId).innerHTML = bannerText[IDnum];
			//document.getElementById(objId).style.display = 'block';
			document.getElementById(objId).style.visibility='visible';
			document.getElementById(objId).style.color='#000';
			}
		}
		function noneText(objId){
			if (document.getElementById(objId)!=null){
			//document.getElementById(objId).style.display = 'none';
			//displayで処理すると、領域がなくなるのでフッターがカクカクシカジカ動くので…
			//document.getElementById(objId).style.color='#fff';
			document.getElementById(objId).style.visibility='hidden';
			}
		}
	