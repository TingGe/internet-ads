(function( w, d ){ 
    var o = { 
			i: "mm_37227883_3484494_11371704", 
			callback : "", 
			userid : "", 
			o : "", 
			f : "", 
			n : "", 
			sd : "toruk.tanx.com" 
		}, 
		p = { 
			c : 'gbk', 
            /*-- 原代码 --*/
			//s : 'http://cdn.tanx.com/t/tanxssp.js' 
            /*-- 本地代码 --*/
			s : './cdn.tanx.com/t/tanxssp.js' 
		}; 
		w.tanx_ssp_onload = w.tanx_ssp_onload || []; 
		tanx_ssp_onload.push( o ); 
		if( d.getElementById('tanx-a-' + ( o.i || '' ) ) ) { 
			var s = d.createElement("script"),  
				h = d.getElementsByTagName("head")[0]; 
			s.charset = p.c; 
			s.async = true; 
			s.src = p.s; 
			h.insertBefore(s, h.firstChild); 
		} else { 
            d.write('<script charset="'+ p.c +'" src="'+ p.s +'"></script>'); 
		} 
    })(window, document)
