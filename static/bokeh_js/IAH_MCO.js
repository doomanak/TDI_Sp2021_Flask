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
      };var element = document.getElementById("70cea02a-2a9c-4145-9705-7e98fdd9f0a9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '70cea02a-2a9c-4145-9705-7e98fdd9f0a9' but no matching script tag was found. ")
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
                  var docs_json = {"da3d6869-01ae-427f-b219-11c4a4d97327":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e84336ad-cced-41bf-9cbc-38704cc2a0a3","type":"Rect"},{"attributes":{},"id":"a345e76e-4f54-49e9-a658-416332cc118b","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"ea3fb7b7-83fa-47c0-abfc-2a696a6bbd3a","type":"ColumnDataSource"},"glyph":{"id":"81e8178b-5c4c-4668-af6a-7c9849915f0e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9e341631-fcda-4413-81f7-750840eceb3d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0a47122-76e1-43d7-854c-435976704517","type":"Rect"},{"attributes":{"data_source":{"id":"09c3464d-b2f4-4b12-933b-a071cb89cda3","type":"ColumnDataSource"},"glyph":{"id":"c0a47122-76e1-43d7-854c-435976704517","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e45ab1ba-62d4-4604-b7bb-e9e3e735c09a","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5193c536-699c-4d73-b65d-14cc40d25074","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"c0378af3-1fed-462f-9a47-540fe0d831c2","type":"ColumnDataSource"},"glyph":{"id":"547f5247-dd37-4fd0-94e5-80a80ac17bcf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2eb7992-b2e8-45ec-87df-0f8e62d6351e","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a345e76e-4f54-49e9-a658-416332cc118b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"},"ticker":{"id":"8f8518a3-b39c-435d-9f3c-332825589914","type":"CategoricalTicker"}},"id":"373525bd-5f99-4998-9f4d-2b9b0815725e","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"c58f038a-2831-4dfd-9763-87339214ec3d","type":"ColumnDataSource"},"glyph":{"id":"8b9503ee-b666-4083-a29c-4ee70ab4ab93","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"55ad9069-0141-4d49-a1b4-fbee66121e06","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0],"x":[15,16,16,15,15,17,17,16,17,21],"y":["Monday","Monday","Tuesday","Thursday","Friday","Friday","Saturday","Sunday","Sunday","Sunday"]}},"id":"736893f6-3014-4dc9-a1a2-b105ebe4e6b7","type":"ColumnDataSource"},{"attributes":{},"id":"9202eeb5-dbd8-4af1-9052-daac13f5802b","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"0094f829-c1ff-4c57-8448-c542bcedc258","type":"LinearAxis"}],"left":[{"id":"373525bd-5f99-4998-9f4d-2b9b0815725e","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"cc9cfb28-0feb-4cb7-bf18-357cdb41370b","type":"BoxAnnotation"},{"id":"f21d7887-f94e-495e-985a-29e8c988bced","type":"GlyphRenderer"},{"id":"55ad9069-0141-4d49-a1b4-fbee66121e06","type":"GlyphRenderer"},{"id":"ec538e56-ec19-4242-bdbf-aaf9bd8a1d77","type":"GlyphRenderer"},{"id":"e45ab1ba-62d4-4604-b7bb-e9e3e735c09a","type":"GlyphRenderer"},{"id":"c2eb7992-b2e8-45ec-87df-0f8e62d6351e","type":"GlyphRenderer"},{"id":"d2da2bae-6d6d-4333-84aa-8dced0575d06","type":"GlyphRenderer"},{"id":"9e341631-fcda-4413-81f7-750840eceb3d","type":"GlyphRenderer"},{"id":"0bf83ff6-7a18-4369-ae8a-fa1db4f9d9c4","type":"GlyphRenderer"},{"id":"464e3236-5e8a-4358-9f16-d5f040120cec","type":"GlyphRenderer"},{"id":"0094f829-c1ff-4c57-8448-c542bcedc258","type":"LinearAxis"},{"id":"373525bd-5f99-4998-9f4d-2b9b0815725e","type":"CategoricalAxis"},{"id":"fb70d810-b51b-4b99-b520-74d9187577a2","type":"ColorBar"}],"right":[{"id":"fb70d810-b51b-4b99-b520-74d9187577a2","type":"ColorBar"}],"title":{"id":"526540f3-b67a-473f-b579-d31c810d8e7c","type":"Title"},"tool_events":{"id":"7e7d029a-9aca-4cd6-a379-480e5417add3","type":"ToolEvents"},"toolbar":{"id":"471c7604-9d4e-409e-a084-10bffd9a696a","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"753e2f8b-41ea-4b3f-b837-fdc8bd07f83c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"65f002cd-80b6-49f7-aed2-b957354ef1e5","type":"FactorRange"}},"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"},{"attributes":{"child":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"66f61a06-d449-46a8-a1bb-2c3498e3bc3b","type":"Panel"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cc9cfb28-0feb-4cb7-bf18-357cdb41370b","type":"BoxAnnotation"},{"attributes":{},"id":"3649ee6a-8800-4409-98f1-f6ba978b7160","type":"BasicTicker"},{"attributes":{"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"}},"id":"61beae49-f910-4762-92e7-da05a8f13c67","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"66f61a06-d449-46a8-a1bb-2c3498e3bc3b","type":"Panel"}]},"id":"3ca063ae-043e-4b41-8e34-422f9f0de186","type":"Tabs"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"b08d2606-6dff-4da2-985f-aac893b26124","type":"BasicTickFormatter"},"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"},"ticker":{"id":"3649ee6a-8800-4409-98f1-f6ba978b7160","type":"BasicTicker"}},"id":"0094f829-c1ff-4c57-8448-c542bcedc258","type":"LinearAxis"},{"attributes":{},"id":"4e123d40-690d-4c91-845b-caa739ba36c9","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a301db07-7a54-4688-8384-709a230a312f","type":"Rect"},{"attributes":{"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"}},"id":"f67cf6c9-6686-4242-b973-9ad675dbf567","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b9503ee-b666-4083-a29c-4ee70ab4ab93","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f67cf6c9-6686-4242-b973-9ad675dbf567","type":"PanTool"},{"id":"61beae49-f910-4762-92e7-da05a8f13c67","type":"WheelZoomTool"},{"id":"526878f4-b6d6-44bb-9033-9cbedb38797c","type":"BoxZoomTool"},{"id":"60d40f6d-f89e-4631-888e-af6244dacf1f","type":"SaveTool"},{"id":"f71dc2f3-ffd4-4034-a841-bf45d6bfb862","type":"ResetTool"},{"id":"b456bf22-b416-4b68-9fe6-f1510a415deb","type":"HelpTool"}]},"id":"471c7604-9d4e-409e-a084-10bffd9a696a","type":"Toolbar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"526540f3-b67a-473f-b579-d31c810d8e7c","type":"Title"},{"attributes":{},"id":"b08d2606-6dff-4da2-985f-aac893b26124","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"81e8178b-5c4c-4668-af6a-7c9849915f0e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,3.0,0.0,0.0,0.0,0.0],"x":[6,21,20,23,6,23],"y":["Monday","Monday","Tuesday","Saturday","Sunday","Sunday"]}},"id":"ae367e96-f10f-4513-bc78-32a52dafc471","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.736842105263158,10.518072289156626,11.333333333333334,11.090909090909092,12.698630136986301,10.895833333333334,12.53125,11.333333333333334,11.59375,12.674157303370787,12.178571428571429,13.0,10.456521739130435],"x":[7,12,20,9,12,14,16,21,7,14,20,21,12],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Friday","Friday","Saturday"]}},"id":"8ea29da6-35ac-4e04-aa89-71fb2ac96979","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dbe097ab-5dfa-46a5-9682-70050b399d63","type":"Rect"},{"attributes":{"data_source":{"id":"2daf6830-4960-479e-a113-6d5f01559ba8","type":"ColumnDataSource"},"glyph":{"id":"e84336ad-cced-41bf-9cbc-38704cc2a0a3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0bf83ff6-7a18-4369-ae8a-fa1db4f9d9c4","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"cc9cfb28-0feb-4cb7-bf18-357cdb41370b","type":"BoxAnnotation"},"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"}},"id":"526878f4-b6d6-44bb-9033-9cbedb38797c","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"736893f6-3014-4dc9-a1a2-b105ebe4e6b7","type":"ColumnDataSource"},"glyph":{"id":"dbe097ab-5dfa-46a5-9682-70050b399d63","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f21d7887-f94e-495e-985a-29e8c988bced","type":"GlyphRenderer"},{"attributes":{},"id":"8f8518a3-b39c-435d-9f3c-332825589914","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":23},"id":"753e2f8b-41ea-4b3f-b837-fdc8bd07f83c","type":"Range1d"},{"attributes":{"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"}},"id":"b456bf22-b416-4b68-9fe6-f1510a415deb","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.627659574468085,7.628318584070796,8.666666666666666,7.881188118811881,7.357512953367876,9.458333333333334,8.31578947368421,9.40625,8.285714285714286,8.253521126760564,9.80952380952381,7.35,7.651041666666667,8.824742268041238,9.016949152542374,9.146341463414634,10.0,8.285714285714286,8.161016949152541,8.790322580645162,9.210526315789474,8.229166666666666,9.5,8.589285714285714,9.37704918032787,9.902173913043478,7.9714285714285715,7.083333333333333,9.240384615384615,8.333333333333334,10.0,8.176470588235293],"x":[8,10,11,14,7,8,18,7,8,10,18,20,7,8,9,12,20,9,10,11,18,7,8,9,11,14,16,7,8,9,12,18],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday","Sunday"]}},"id":"ea3fb7b7-83fa-47c0-abfc-2a696a6bbd3a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"}},"id":"60d40f6d-f89e-4631-888e-af6244dacf1f","type":"SaveTool"},{"attributes":{"data_source":{"id":"8ea29da6-35ac-4e04-aa89-71fb2ac96979","type":"ColumnDataSource"},"glyph":{"id":"79bf3b2b-4f85-4422-a9f1-fb166ce4df93","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d2da2bae-6d6d-4333-84aa-8dced0575d06","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"65f002cd-80b6-49f7-aed2-b957354ef1e5","type":"FactorRange"},{"attributes":{"data_source":{"id":"ae367e96-f10f-4513-bc78-32a52dafc471","type":"ColumnDataSource"},"glyph":{"id":"a301db07-7a54-4688-8384-709a230a312f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"464e3236-5e8a-4358-9f16-d5f040120cec","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.56896551724138,24.68103448275862,24.057377049180328],"x":[15,15,15],"y":["Tuesday","Wednesday","Saturday"]}},"id":"c58f038a-2831-4dfd-9763-87339214ec3d","type":"ColumnDataSource"},{"attributes":{},"id":"7e7d029a-9aca-4cd6-a379-480e5417add3","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"547f5247-dd37-4fd0-94e5-80a80ac17bcf","type":"Rect"},{"attributes":{"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"}},"id":"f71dc2f3-ffd4-4034-a841-bf45d6bfb862","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.527559055118111,15.155555555555555,15.103174603174603,15.398496240601503,13.5,15.311688311688311,16.0,15.385826771653543,15.495934959349594,14.4,15.770833333333334,14.978260869565217,15.325925925925926,16.0,14.444444444444445,16.008695652173913],"x":[19,10,13,19,21,12,17,19,10,18,8,12,10,13,21,14],"y":["Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Sunday"]}},"id":"c0378af3-1fed-462f-9a47-540fe0d831c2","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"68205470-33cc-43d4-b850-cd8fec5b495e","type":"Rect"},{"attributes":{"color_mapper":{"id":"5193c536-699c-4d73-b65d-14cc40d25074","type":"LinearColorMapper"},"formatter":{"id":"9202eeb5-dbd8-4af1-9052-daac13f5802b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"05766c7c-36dd-42a8-84e2-b162e875ff50","subtype":"Chart","type":"Plot"},"ticker":{"id":"4e123d40-690d-4c91-845b-caa739ba36c9","type":"BasicTicker"}},"id":"fb70d810-b51b-4b99-b520-74d9187577a2","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"79bf3b2b-4f85-4422-a9f1-fb166ce4df93","type":"Rect"},{"attributes":{"data_source":{"id":"502c25ce-56e3-4d86-b595-39f5a0abd8f9","type":"ColumnDataSource"},"glyph":{"id":"68205470-33cc-43d4-b850-cd8fec5b495e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec538e56-ec19-4242-bdbf-aaf9bd8a1d77","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.228813559322035,17.571428571428573,17.96808510638298,17.153846153846153,18.70731707317073,19.358974358974358,19.42622950819672,17.214285714285715,18.496062992125985,18.54054054054054,18.203252032520325,19.452380952380953],"x":[13,18,14,17,13,16,13,14,13,16,10,19],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Sunday","Sunday"]}},"id":"09c3464d-b2f4-4b12-933b-a071cb89cda3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.129032258064516,5.6,5.470588235294118,5.745454545454545,3.5,4.328125,5.96,3.7222222222222223,4.967741935483871,5.684210526315789],"x":[9,17,11,9,21,11,18,20,11,20],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Thursday","Saturday","Saturday","Sunday","Sunday"]}},"id":"2daf6830-4960-479e-a113-6d5f01559ba8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.25531914893617,22.181818181818183,21.0078125,20.034188034188034,20.0546875,20.054545454545455,22.5],"x":[11,17,19,19,19,13,15],"y":["Wednesday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"502c25ce-56e3-4d86-b595-39f5a0abd8f9","type":"ColumnDataSource"}],"root_ids":["3ca063ae-043e-4b41-8e34-422f9f0de186"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"da3d6869-01ae-427f-b219-11c4a4d97327","elementid":"70cea02a-2a9c-4145-9705-7e98fdd9f0a9","modelid":"3ca063ae-043e-4b41-8e34-422f9f0de186"}];
                  
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