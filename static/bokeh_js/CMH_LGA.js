document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("f0ed8a50-5748-4506-bc77-318f0f2aff63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f0ed8a50-5748-4506-bc77-318f0f2aff63' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"8c7f5d7e-b120-4f7e-8024-ad25c240af69":{"roots":{"references":[{"attributes":{"child":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"123164c0-7b60-402b-ab1b-3b3246f9acf6","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.5,4.464788732394366],"x":[5,17],"y":["Wednesday","Saturday"]}},"id":"5832981e-cb1a-457d-8a11-0099a9752aee","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"3d27293a-c8e8-4bc9-bf5f-916d052678de","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7973e2b3-8542-4868-bcff-3d44ceac00cb","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e44ad11f-e2eb-4faf-85a6-68290be9659a","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"674aa828-de0d-4824-857a-5cab5b4b5d0a","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ee39264f-e722-400a-9ff8-4c67a63a3cc6","type":"BoxAnnotation"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"4492041e-54eb-485e-beec-c884aded606b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"},"ticker":{"id":"de731cb0-4892-4ccb-818c-c921af4f5776","type":"CategoricalTicker"}},"id":"3b29b9cb-3fc3-48df-a4c7-a4d0ff34061f","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.296296296296298,20.022727272727273,22.2,20.261904761904763,22.07920792079208,23.07017543859649,22.0,22.0,22.245283018867923,20.303797468354432],"x":[10,16,14,15,8,13,15,16,13,15],"y":["Monday","Monday","Tuesday","Tuesday","Friday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"fb526c93-3329-457f-883b-a5c0914aaf30","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"ee39264f-e722-400a-9ff8-4c67a63a3cc6","type":"BoxAnnotation"},"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"}},"id":"f616afbb-a7ad-4701-9988-fb72902193d2","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.3636363636363635,0.0,0.0,0.0,0.0,0.0,0.0,0.5,0.0,0.0],"x":[9,7,12,7,8,9,13,6,7,12],"y":["Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"7f498e67-7f20-4d11-bcfa-cb3ea6fabe8c","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ac21587-b4a6-48cb-90ae-314c17a17c13","type":"Rect"},{"attributes":{"color_mapper":{"id":"eef1780b-3fb2-4460-95fd-ad93b1aa62e0","type":"LinearColorMapper"},"formatter":{"id":"f10db1f3-447c-42ed-a75c-8b0da2684871","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"},"ticker":{"id":"5c101b58-ba13-4669-9abb-1a411ec69f7e","type":"BasicTicker"}},"id":"649ae501-0085-4c7d-880f-63b97c7f6a9f","type":"ColorBar"},{"attributes":{},"id":"14c6633e-8428-4f12-9ae4-8be6ad069e7f","type":"BasicTicker"},{"attributes":{"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"}},"id":"649719a8-2f56-4d0c-9515-71325edfeaa9","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"7f498e67-7f20-4d11-bcfa-cb3ea6fabe8c","type":"ColumnDataSource"},"glyph":{"id":"a87c6a56-e096-4705-8597-6d79d7fae853","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87306c79-c836-440a-a00c-73f2a4e52688","type":"GlyphRenderer"},{"attributes":{},"id":"f1bedf25-bc46-4746-b44c-e12f6346606f","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b65dd211-14e4-48b9-9351-ba0599246da9","type":"PanTool"},{"id":"649719a8-2f56-4d0c-9515-71325edfeaa9","type":"WheelZoomTool"},{"id":"f616afbb-a7ad-4701-9988-fb72902193d2","type":"BoxZoomTool"},{"id":"3badf964-26df-4621-a519-b17066f17781","type":"SaveTool"},{"id":"c5337ee7-f9b9-49cf-a50d-bfaecb1c2ca6","type":"ResetTool"},{"id":"22c8eac0-4a2f-4a0c-ab97-8305e4e07c1e","type":"HelpTool"}]},"id":"d2c683dd-e99e-44ec-a689-2ac545f88fe4","type":"Toolbar"},{"attributes":{"data_source":{"id":"645b0f18-be6f-418c-b196-cc07980e653e","type":"ColumnDataSource"},"glyph":{"id":"7387c18e-28fd-4250-a15f-ec72afb18fac","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8109a0ae-cb30-4709-bea5-79650e7ffb90","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[25.98076923076923,26.636363636363637,25.076923076923077,25.29591836734694,24.011764705882353,26.1875,24.166666666666668],"x":[17,18,19,17,6,18,19],"y":["Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Sunday"]}},"id":"b4b755d9-69ed-44fc-b521-cdcceba1cdca","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"22059e22-bf4e-465a-92ba-a7e58793c0a6","type":"ColumnDataSource"},"glyph":{"id":"44b95ec8-6f08-4eb0-a759-1a71b7b3abf4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ee0f8ecd-f075-4320-9af2-7f6987c2c0c2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5832981e-cb1a-457d-8a11-0099a9752aee","type":"ColumnDataSource"},"glyph":{"id":"e44ad11f-e2eb-4faf-85a6-68290be9659a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f71e0530-69fb-4cc3-9c54-24e3d7c33885","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"123164c0-7b60-402b-ab1b-3b3246f9acf6","type":"Panel"}]},"id":"85955da1-f757-4a6b-9fc2-5bd22963c873","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.272727272727273,16.545454545454547,15.666666666666666,14.242424242424242,15.433333333333334,15.649122807017545,16.0,15.6,14.05940594059406,15.830508474576272,15.0,16.057692307692307,15.333333333333334],"x":[9,19,13,8,11,13,14,7,8,10,5,14,18],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Sunday","Sunday"]}},"id":"16d04e1e-2bb6-4907-ad05-579e0a1a4ba3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b4b755d9-69ed-44fc-b521-cdcceba1cdca","type":"ColumnDataSource"},"glyph":{"id":"4ac21587-b4a6-48cb-90ae-314c17a17c13","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e55269ad-c186-4550-9b6e-00b32aa365d5","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a23f1106-3b6d-4953-b45c-88fe94bf1413","type":"FactorRange"},{"attributes":{},"id":"a55b9716-62b9-48f9-92da-32d87f74ef37","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"651778a5-2c43-41c0-835b-21c18f6bd946","type":"ColumnDataSource"},"glyph":{"id":"4387f73a-24c5-4eb1-b10f-407446694583","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ce8f2d60-a22e-4eea-ba48-f52b40ea94b1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e3ad84e1-51ae-4521-a064-0e9eac043add","type":"ColumnDataSource"},"glyph":{"id":"674aa828-de0d-4824-857a-5cab5b4b5d0a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2c78eac6-df45-4301-9d30-6ac24e31050f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"}},"id":"22c8eac0-4a2f-4a0c-ab97-8305e4e07c1e","type":"HelpTool"},{"attributes":{"data_source":{"id":"fb526c93-3329-457f-883b-a5c0914aaf30","type":"ColumnDataSource"},"glyph":{"id":"325670c4-bbae-4f99-aaaa-7897ed058589","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b9a2f625-fb2b-42ac-b6f7-aa747ae36599","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"}},"id":"c5337ee7-f9b9-49cf-a50d-bfaecb1c2ca6","type":"ResetTool"},{"attributes":{},"id":"5c101b58-ba13-4669-9abb-1a411ec69f7e","type":"BasicTicker"},{"attributes":{},"id":"de731cb0-4892-4ccb-818c-c921af4f5776","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7387c18e-28fd-4250-a15f-ec72afb18fac","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.762886597938145,18.63235294117647,17.181818181818183,18.488372093023255,18.410714285714285,19.435294117647057,17.666666666666668,18.541176470588237,17.363636363636363,17.0,16.76923076923077,19.679611650485437],"x":[8,11,17,6,10,15,5,6,9,14,11,17],"y":["Monday","Monday","Monday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Sunday","Sunday"]}},"id":"22059e22-bf4e-465a-92ba-a7e58793c0a6","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"44b95ec8-6f08-4eb0-a759-1a71b7b3abf4","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.28735632183908,12.333333333333334,10.82,12.636363636363637,10.381818181818181,13.067796610169491,10.555555555555555,12.661538461538461,12.387755102040817],"x":[6,7,14,9,10,11,18,11,13],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Thursday","Thursday"]}},"id":"645b0f18-be6f-418c-b196-cc07980e653e","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"492660e8-7269-498d-bbe7-94ef570797c3","type":"Title"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"a55b9716-62b9-48f9-92da-32d87f74ef37","type":"BasicTickFormatter"},"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"},"ticker":{"id":"14c6633e-8428-4f12-9ae4-8be6ad069e7f","type":"BasicTicker"}},"id":"7081c34a-67aa-4b78-8d83-eb180c85fe90","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"325670c4-bbae-4f99-aaaa-7897ed058589","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"eef1780b-3fb2-4460-95fd-ad93b1aa62e0","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"}},"id":"b65dd211-14e4-48b9-9351-ba0599246da9","type":"PanTool"},{"attributes":{},"id":"4492041e-54eb-485e-beec-c884aded606b","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[6.726190476190476,8.818181818181818,9.080645161290322,7.05,9.835443037974683,7.883720930232558,8.5625,9.621052631578948,9.106382978723405],"x":[6,9,11,10,11,14,15,8,16],"y":["Wednesday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"651778a5-2c43-41c0-835b-21c18f6bd946","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16d04e1e-2bb6-4907-ad05-579e0a1a4ba3","type":"ColumnDataSource"},"glyph":{"id":"7973e2b3-8542-4868-bcff-3d44ceac00cb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b31426dc-41e5-473f-aba0-5d793af2f7c6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[27.5,30.0,29.194805194805195,27.227272727272727,30.0,30.0,30.0,30.0,29.754901960784313,29.642857142857142,30.0,30.0,30.0,30.0,27.194805194805195,30.0,30.0,30.0,29.333333333333332,30.0,28.161616161616163,30.0,30.0,30.0],"x":[5,13,15,18,5,7,8,16,17,19,7,16,12,14,15,16,18,19,10,16,17,19,9,10],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Friday","Sunday","Sunday"]}},"id":"e3ad84e1-51ae-4521-a064-0e9eac043add","type":"ColumnDataSource"},{"attributes":{},"id":"f10db1f3-447c-42ed-a75c-8b0da2684871","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"}},"id":"3badf964-26df-4621-a519-b17066f17781","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a87c6a56-e096-4705-8597-6d79d7fae853","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4387f73a-24c5-4eb1-b10f-407446694583","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"7081c34a-67aa-4b78-8d83-eb180c85fe90","type":"LinearAxis"}],"left":[{"id":"3b29b9cb-3fc3-48df-a4c7-a4d0ff34061f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ee39264f-e722-400a-9ff8-4c67a63a3cc6","type":"BoxAnnotation"},{"id":"2c78eac6-df45-4301-9d30-6ac24e31050f","type":"GlyphRenderer"},{"id":"e55269ad-c186-4550-9b6e-00b32aa365d5","type":"GlyphRenderer"},{"id":"b9a2f625-fb2b-42ac-b6f7-aa747ae36599","type":"GlyphRenderer"},{"id":"ee0f8ecd-f075-4320-9af2-7f6987c2c0c2","type":"GlyphRenderer"},{"id":"b31426dc-41e5-473f-aba0-5d793af2f7c6","type":"GlyphRenderer"},{"id":"8109a0ae-cb30-4709-bea5-79650e7ffb90","type":"GlyphRenderer"},{"id":"ce8f2d60-a22e-4eea-ba48-f52b40ea94b1","type":"GlyphRenderer"},{"id":"f71e0530-69fb-4cc3-9c54-24e3d7c33885","type":"GlyphRenderer"},{"id":"87306c79-c836-440a-a00c-73f2a4e52688","type":"GlyphRenderer"},{"id":"7081c34a-67aa-4b78-8d83-eb180c85fe90","type":"LinearAxis"},{"id":"3b29b9cb-3fc3-48df-a4c7-a4d0ff34061f","type":"CategoricalAxis"},{"id":"649ae501-0085-4c7d-880f-63b97c7f6a9f","type":"ColorBar"}],"right":[{"id":"649ae501-0085-4c7d-880f-63b97c7f6a9f","type":"ColorBar"}],"title":{"id":"492660e8-7269-498d-bbe7-94ef570797c3","type":"Title"},"tool_events":{"id":"f1bedf25-bc46-4746-b44c-e12f6346606f","type":"ToolEvents"},"toolbar":{"id":"d2c683dd-e99e-44ec-a689-2ac545f88fe4","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"3d27293a-c8e8-4bc9-bf5f-916d052678de","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a23f1106-3b6d-4953-b45c-88fe94bf1413","type":"FactorRange"}},"id":"7b189b39-ab13-4db9-ad73-d24eea5a6b60","subtype":"Chart","type":"Plot"}],"root_ids":["85955da1-f757-4a6b-9fc2-5bd22963c873"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"8c7f5d7e-b120-4f7e-8024-ad25c240af69","elementid":"f0ed8a50-5748-4506-bc77-318f0f2aff63","modelid":"85955da1-f757-4a6b-9fc2-5bd22963c873"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});