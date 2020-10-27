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
      };var element = document.getElementById("6b4f1feb-93eb-4ffa-9e73-9f0b8d41bede");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b4f1feb-93eb-4ffa-9e73-9f0b8d41bede' but no matching script tag was found. ")
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
                  var docs_json = {"66087d19-b8ed-46aa-ae47-5ba9c8de52fc":{"roots":{"references":[{"attributes":{"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"}},"id":"c3eecc6d-1f68-452b-a48a-b1d1cf59ebca","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.283582089552239,12.0,13.333333333333334,12.184615384615384],"x":[8,13,9,8],"y":["Monday","Monday","Tuesday","Wednesday"]}},"id":"9ebbdee5-c04e-4e32-bec3-317e746d7b0d","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"8daaed2b-4366-4473-a76f-fa631ba12233","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"},"ticker":{"id":"082da1ac-6826-4b14-b67e-103bb5466003","type":"CategoricalTicker"}},"id":"496ae508-3540-4c15-b5df-011a00b7e873","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.666666666666666,13.36923076923077,13.475409836065573,15.8125,15.285714285714286,15.703125,15.454545454545455,14.276923076923078,16.109375],"x":[12,18,8,8,18,8,13,13,18],"y":["Monday","Monday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"5c4521f5-a791-4342-88e7-78000bc80ff6","type":"ColumnDataSource"},{"attributes":{},"id":"8daaed2b-4366-4473-a76f-fa631ba12233","type":"CategoricalTickFormatter"},{"attributes":{},"id":"9faea722-7470-4f95-8db7-370b79e0d701","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[25.384615384615383],"x":[13],"y":["Wednesday"]}},"id":"b76b8b4c-754f-4352-8800-6693c393d43d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"64ce1c53-c77b-4154-a60a-0bc5adfad335","type":"ColumnDataSource"},"glyph":{"id":"7044c805-af70-4ea4-a7dd-4f2be96e2a03","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87056033-ddce-4a41-af21-c70cf9b0b46d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7044c805-af70-4ea4-a7dd-4f2be96e2a03","type":"Rect"},{"attributes":{},"id":"a1155a82-aaf3-4ea9-8336-228f6522a7b8","type":"BasicTicker"},{"attributes":{"callback":null,"end":23},"id":"53c60c75-69e0-4974-af00-2dd59442f03f","type":"Range1d"},{"attributes":{},"id":"69e38fee-d0cf-42b5-bc2d-ac653ceca158","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[16.859375,17.559322033898304],"x":[13,18],"y":["Tuesday","Tuesday"]}},"id":"41aee748-63ae-4488-8879-8601db2e60f7","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"ExpressJet Airlines "},"id":"ba7482e1-b1be-4d26-a52e-8433c91fbf6d","type":"Title"},{"attributes":{"data_source":{"id":"b9f70ca5-6086-4366-adc8-960d1c6ab333","type":"ColumnDataSource"},"glyph":{"id":"9cad87c9-bac7-4568-bd7e-1ed483ab6d01","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4d1714f0-038a-4c21-9cf4-7cdf56e239bd","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9cad87c9-bac7-4568-bd7e-1ed483ab6d01","type":"Rect"},{"attributes":{},"id":"f14761dc-5746-4750-be2e-80453deb958e","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"211badcf-e7de-4158-96e5-bd88e0354f13","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"119f645d-2633-49e5-a124-2fcfc68f3a00","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3941036b-3808-462c-9f81-24567a4ed1db","type":"Rect"},{"attributes":{"overlay":{"id":"ab6e0600-a311-402c-8ad7-fc4c438585d5","type":"BoxAnnotation"},"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"}},"id":"125230af-33f4-4fb2-aff8-b62022c947f0","type":"BoxZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"70d86824-333a-49ff-a105-99c14a980959","type":"LinearAxis"}],"left":[{"id":"496ae508-3540-4c15-b5df-011a00b7e873","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ab6e0600-a311-402c-8ad7-fc4c438585d5","type":"BoxAnnotation"},{"id":"21fd73c7-95ce-4f3a-8bad-28441671697d","type":"GlyphRenderer"},{"id":"da6f4c8f-1a99-4519-827e-43ffce6f44bf","type":"GlyphRenderer"},{"id":"fedd395f-e2b4-469b-b85e-3c19ade7ceb7","type":"GlyphRenderer"},{"id":"6dda4fb2-e709-451e-8e58-45376521763c","type":"GlyphRenderer"},{"id":"4d1714f0-038a-4c21-9cf4-7cdf56e239bd","type":"GlyphRenderer"},{"id":"36620a2f-8796-40d1-b63e-1411efe3d5a1","type":"GlyphRenderer"},{"id":"0ba1a223-34ec-4c19-95bb-d53f2a971c2e","type":"GlyphRenderer"},{"id":"72463cd3-f836-4587-b215-97c7936644b0","type":"GlyphRenderer"},{"id":"6ea5f950-5736-42f7-a791-aa63cba4e1b3","type":"GlyphRenderer"},{"id":"70d86824-333a-49ff-a105-99c14a980959","type":"LinearAxis"},{"id":"496ae508-3540-4c15-b5df-011a00b7e873","type":"CategoricalAxis"},{"id":"06d17146-1dbc-46fe-93b1-1aa53b352295","type":"ColorBar"}],"right":[{"id":"06d17146-1dbc-46fe-93b1-1aa53b352295","type":"ColorBar"}],"title":{"id":"ba7482e1-b1be-4d26-a52e-8433c91fbf6d","type":"Title"},"tool_events":{"id":"a78ed2f3-2ea6-4409-a10d-9709db1acc84","type":"ToolEvents"},"toolbar":{"id":"e4335f16-e390-45d5-b805-a63269a41cf2","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"766001d6-272f-4d95-aa3b-fd4ac0d92e89","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4bdec330-7260-4b9b-8a5d-035996218438","type":"FactorRange"}},"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c73f3ba5-d4f7-4e21-9bd0-0166369ed7be","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,29.3,30.0,30.0],"x":[9,18,13,18],"y":["Monday","Wednesday","Thursday","Thursday"]}},"id":"14052a26-58f7-4c42-8833-7337c0f94317","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"34304bde-3a74-4322-b098-71f5a9aa237c","type":"BasicTickFormatter"},"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"},"ticker":{"id":"9faea722-7470-4f95-8db7-370b79e0d701","type":"BasicTicker"}},"id":"70d86824-333a-49ff-a105-99c14a980959","type":"LinearAxis"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0bf06cb2-d502-459d-9701-6ce4ba92e7af","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"},"ticker":{"id":"b13d0570-ffc3-44d2-b185-d9f0d82b8eb8","type":"CategoricalTicker"}},"id":"bc689496-beab-4876-8949-2907d9f0c73f","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"9ebbdee5-c04e-4e32-bec3-317e746d7b0d","type":"ColumnDataSource"},"glyph":{"id":"02917fad-0c58-4ae2-9c56-3a5f331e8cd8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"36620a2f-8796-40d1-b63e-1411efe3d5a1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"}},"id":"d3ee03f2-a984-4086-bfb2-ca79cb4ee609","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"23dc798e-f846-42c9-b23f-fc8f875ebfe5","type":"ColumnDataSource"},"glyph":{"id":"46d84497-7c7f-4131-9b04-0dde00c6cc05","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"72463cd3-f836-4587-b215-97c7936644b0","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80462cb0-5cdf-4528-a184-34519f5f01da","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"28055b86-b78b-4615-9a18-a7688370dd25","type":"Rect"},{"attributes":{"data_source":{"id":"ce64a950-930b-41c7-bc91-f2a1e1f9db2c","type":"ColumnDataSource"},"glyph":{"id":"211badcf-e7de-4158-96e5-bd88e0354f13","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"da6f4c8f-1a99-4519-827e-43ffce6f44bf","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"0b53acb5-8042-45f9-96a3-513c207cadff","type":"LinearColorMapper"},"formatter":{"id":"8ee368a7-b2c9-48b0-987e-07946f6d1609","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"},"ticker":{"id":"69e38fee-d0cf-42b5-bc2d-ac653ceca158","type":"BasicTicker"}},"id":"06d17146-1dbc-46fe-93b1-1aa53b352295","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8c7ef067-3927-4a17-8835-c1930828ec3d","type":"PanTool"},{"id":"d3ee03f2-a984-4086-bfb2-ca79cb4ee609","type":"WheelZoomTool"},{"id":"1733ffc2-612f-4d10-bb59-e255a77a624f","type":"BoxZoomTool"},{"id":"59126e6c-a5c0-4716-b99b-f56d25059cfa","type":"SaveTool"},{"id":"148ac31b-e718-480a-bb66-8b74b4c9e3f3","type":"ResetTool"},{"id":"b25e70db-697c-4607-8c21-8b5e60899bae","type":"HelpTool"}]},"id":"b12a058b-ee22-423f-8841-485ab60fcbcb","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.1875],"x":[13],"y":["Friday"]}},"id":"64ce1c53-c77b-4154-a60a-0bc5adfad335","type":"ColumnDataSource"},{"attributes":{"child":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"},"title":"EV"},"id":"372ff085-2795-41b7-8936-123711f63a5d","type":"Panel"},{"attributes":{"data_source":{"id":"ec6f2a65-e002-4b66-8274-07e2c54509b7","type":"ColumnDataSource"},"glyph":{"id":"3941036b-3808-462c-9f81-24567a4ed1db","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fedd395f-e2b4-469b-b85e-3c19ade7ceb7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0,3.25],"x":[12,12,9,12,9],"y":["Tuesday","Wednesday","Thursday","Thursday","Sunday"]}},"id":"8a09a5f8-9f45-4989-82a4-1a8d7a3f55a1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,29.3,30.0,30.0],"x":[9,18,13,18],"y":["Monday","Wednesday","Thursday","Thursday"]}},"id":"08881e36-983f-4296-9aba-1256a96bb4e8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"}},"id":"53fa5297-58f3-41c5-b7c8-1f5b380e1849","type":"PanTool"},{"attributes":{"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"}},"id":"b25e70db-697c-4607-8c21-8b5e60899bae","type":"HelpTool"},{"attributes":{},"id":"8ee368a7-b2c9-48b0-987e-07946f6d1609","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"}},"id":"96b6479d-889f-4789-9d26-ac487a379acc","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"02917fad-0c58-4ae2-9c56-3a5f331e8cd8","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[25.384615384615383],"x":[13],"y":["Wednesday"]}},"id":"ce64a950-930b-41c7-bc91-f2a1e1f9db2c","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5551ef0-9a79-4c4d-bd86-a7d452a64ec5","type":"Rect"},{"attributes":{},"id":"dd727a88-f1d3-469e-a3e4-f52d767227a9","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3be9fdd-14ac-484d-8a74-a9dbc728e870","type":"Rect"},{"attributes":{"data_source":{"id":"14052a26-58f7-4c42-8833-7337c0f94317","type":"ColumnDataSource"},"glyph":{"id":"b83e3bce-5622-4cc3-af3a-0734c04b1d3b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"254da686-4800-4b6b-aa48-cdde66fb7168","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"41aee748-63ae-4488-8879-8601db2e60f7","type":"ColumnDataSource"},"glyph":{"id":"b3be9fdd-14ac-484d-8a74-a9dbc728e870","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8be0fb37-751f-40e0-8f27-52171e1afd1d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"}},"id":"8c7ef067-3927-4a17-8835-c1930828ec3d","type":"PanTool"},{"attributes":{"data_source":{"id":"4b8316b7-e7af-481a-ac41-5f7edd4a793f","type":"ColumnDataSource"},"glyph":{"id":"28055b86-b78b-4615-9a18-a7688370dd25","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6dda4fb2-e709-451e-8e58-45376521763c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b76b8b4c-754f-4352-8800-6693c393d43d","type":"ColumnDataSource"},"glyph":{"id":"25caf20b-8d0b-4343-aa96-b0b906d19f81","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aee61100-40c2-4ecf-8c55-320058771374","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8e74bfa2-23c7-4dd7-bb1b-9f3f87121bb6","type":"ColumnDataSource"},"glyph":{"id":"fe17ed34-d09f-4801-a7cc-4e28713b4c1c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c79de85a-57b6-4059-9dd4-7ac5ddb7b2fb","type":"GlyphRenderer"},{"attributes":{},"id":"082da1ac-6826-4b14-b67e-103bb5466003","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,4.25,5.3125],"x":[9,9,8],"y":["Wednesday","Saturday","Sunday"]}},"id":"f399e48e-efa0-4608-982a-9d952e845545","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"4bdec330-7260-4b9b-8a5d-035996218438","type":"FactorRange"},{"attributes":{"callback":null,"end":23},"id":"766001d6-272f-4d95-aa3b-fd4ac0d92e89","type":"Range1d"},{"attributes":{},"id":"a78ed2f3-2ea6-4409-a10d-9709db1acc84","type":"ToolEvents"},{"attributes":{"overlay":{"id":"80462cb0-5cdf-4528-a184-34519f5f01da","type":"BoxAnnotation"},"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"}},"id":"1733ffc2-612f-4d10-bb59-e255a77a624f","type":"BoxZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"c55e81f8-77e2-495a-ae0d-f0c9a3aae8fe","type":"Panel"},{"id":"372ff085-2795-41b7-8936-123711f63a5d","type":"Panel"}]},"id":"9ac2349b-a253-4ee8-8483-e27cd7b094f1","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.1875],"x":[13],"y":["Friday"]}},"id":"ec6f2a65-e002-4b66-8274-07e2c54509b7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8a09a5f8-9f45-4989-82a4-1a8d7a3f55a1","type":"ColumnDataSource"},"glyph":{"id":"0969bd59-d611-421a-8c09-98d0bb49b6ba","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eb1fb829-0e4b-43af-b0c6-0a78ce0382c5","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e68ce7f-f785-4b97-88ee-e57296850488","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.666666666666666,13.36923076923077,13.475409836065573,15.8125,15.285714285714286,15.703125,15.454545454545455,14.276923076923078,16.109375],"x":[12,18,8,8,18,8,13,13,18],"y":["Monday","Monday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"b9f70ca5-6086-4366-adc8-960d1c6ab333","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4b80dfe3-3700-4f1f-bce2-bc8085912305","type":"ColumnDataSource"},"glyph":{"id":"c5551ef0-9a79-4c4d-bd86-a7d452a64ec5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0798fff2-5e3e-4212-adf8-69574e6dbec6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"}},"id":"148ac31b-e718-480a-bb66-8b74b4c9e3f3","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a005174-a047-4e21-8c4b-538502dd209a","type":"Rect"},{"attributes":{"data_source":{"id":"08881e36-983f-4296-9aba-1256a96bb4e8","type":"ColumnDataSource"},"glyph":{"id":"c73f3ba5-d4f7-4e21-9bd0-0166369ed7be","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"21fd73c7-95ce-4f3a-8bad-28441671697d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ab6e0600-a311-402c-8ad7-fc4c438585d5","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe17ed34-d09f-4801-a7cc-4e28713b4c1c","type":"Rect"},{"attributes":{"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"}},"id":"26e8ae24-8764-4039-952d-79d9dc6c1065","type":"SaveTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"e910808d-589f-4432-9dbe-450cf1638f07","type":"BasicTickFormatter"},"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"},"ticker":{"id":"a1155a82-aaf3-4ea9-8336-228f6522a7b8","type":"BasicTicker"}},"id":"3ab01ab1-be90-42a2-bc80-588536ed46d9","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.283582089552239,12.0,13.333333333333334,12.184615384615384],"x":[8,13,9,8],"y":["Monday","Monday","Tuesday","Wednesday"]}},"id":"4b80dfe3-3700-4f1f-bce2-bc8085912305","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"7e85854f-d096-4360-8a30-d168d6ca95c9","type":"LinearColorMapper"},"formatter":{"id":"ae72a899-204b-442a-b2a8-773e0055cd71","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"},"ticker":{"id":"f14761dc-5746-4750-be2e-80453deb958e","type":"BasicTicker"}},"id":"28de62f7-b303-4321-8286-a53722eea936","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,4.25,5.3125],"x":[9,9,8],"y":["Wednesday","Saturday","Sunday"]}},"id":"23dc798e-f846-42c9-b23f-fc8f875ebfe5","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b83e3bce-5622-4cc3-af3a-0734c04b1d3b","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.227272727272727,8.0,8.418181818181818],"x":[8,9,18],"y":["Tuesday","Friday","Saturday"]}},"id":"8e74bfa2-23c7-4dd7-bb1b-9f3f87121bb6","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"60f20dc5-34b8-4669-88c8-4000d704b2ec","type":"Rect"},{"attributes":{},"id":"ae72a899-204b-442a-b2a8-773e0055cd71","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"583ce785-8271-4df1-ba78-81e993907b54","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.227272727272727,8.0,8.418181818181818],"x":[8,9,18],"y":["Tuesday","Friday","Saturday"]}},"id":"39551828-7c41-40cf-aca1-1cc1c8263c3a","type":"ColumnDataSource"},{"attributes":{},"id":"b13d0570-ffc3-44d2-b185-d9f0d82b8eb8","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"5c4521f5-a791-4342-88e7-78000bc80ff6","type":"ColumnDataSource"},"glyph":{"id":"6a005174-a047-4e21-8c4b-538502dd209a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"559ff977-c23c-40aa-87ba-56013c2dac2e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[16.859375,17.559322033898304],"x":[13,18],"y":["Tuesday","Tuesday"]}},"id":"4b8316b7-e7af-481a-ac41-5f7edd4a793f","type":"ColumnDataSource"},{"attributes":{},"id":"34304bde-3a74-4322-b098-71f5a9aa237c","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"53fa5297-58f3-41c5-b7c8-1f5b380e1849","type":"PanTool"},{"id":"96b6479d-889f-4789-9d26-ac487a379acc","type":"WheelZoomTool"},{"id":"125230af-33f4-4fb2-aff8-b62022c947f0","type":"BoxZoomTool"},{"id":"26e8ae24-8764-4039-952d-79d9dc6c1065","type":"SaveTool"},{"id":"c3eecc6d-1f68-452b-a48a-b1d1cf59ebca","type":"ResetTool"},{"id":"b7f7df5b-726b-454a-859a-d6011202f12c","type":"HelpTool"}]},"id":"e4335f16-e390-45d5-b805-a63269a41cf2","type":"Toolbar"},{"attributes":{"data_source":{"id":"f399e48e-efa0-4608-982a-9d952e845545","type":"ColumnDataSource"},"glyph":{"id":"3e68ce7f-f785-4b97-88ee-e57296850488","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"07d40f50-220b-4a77-b77c-a329c8efd0e7","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"0b53acb5-8042-45f9-96a3-513c207cadff","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"39551828-7c41-40cf-aca1-1cc1c8263c3a","type":"ColumnDataSource"},"glyph":{"id":"119f645d-2633-49e5-a124-2fcfc68f3a00","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0ba1a223-34ec-4c19-95bb-d53f2a971c2e","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"80386cf0-8496-443f-a137-46dbca64f5ee","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"46d84497-7c7f-4131-9b04-0dde00c6cc05","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7e85854f-d096-4360-8a30-d168d6ca95c9","type":"LinearColorMapper"},{"attributes":{"child":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"c55e81f8-77e2-495a-ae0d-f0c9a3aae8fe","type":"Panel"},{"attributes":{"plot":{"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"}},"id":"59126e6c-a5c0-4716-b99b-f56d25059cfa","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"25caf20b-8d0b-4343-aa96-b0b906d19f81","type":"Rect"},{"attributes":{"data_source":{"id":"4c56f73f-6807-4c32-a100-c52baf6879db","type":"ColumnDataSource"},"glyph":{"id":"60f20dc5-34b8-4669-88c8-4000d704b2ec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ea5f950-5736-42f7-a791-aa63cba4e1b3","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6fce8c58-a618-4a8e-b0ef-d49ef5358cac","subtype":"Chart","type":"Plot"}},"id":"b7f7df5b-726b-454a-859a-d6011202f12c","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0969bd59-d611-421a-8c09-98d0bb49b6ba","type":"Rect"},{"attributes":{},"id":"e910808d-589f-4432-9dbe-450cf1638f07","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3ab01ab1-be90-42a2-bc80-588536ed46d9","type":"LinearAxis"}],"left":[{"id":"bc689496-beab-4876-8949-2907d9f0c73f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"80462cb0-5cdf-4528-a184-34519f5f01da","type":"BoxAnnotation"},{"id":"254da686-4800-4b6b-aa48-cdde66fb7168","type":"GlyphRenderer"},{"id":"aee61100-40c2-4ecf-8c55-320058771374","type":"GlyphRenderer"},{"id":"87056033-ddce-4a41-af21-c70cf9b0b46d","type":"GlyphRenderer"},{"id":"8be0fb37-751f-40e0-8f27-52171e1afd1d","type":"GlyphRenderer"},{"id":"559ff977-c23c-40aa-87ba-56013c2dac2e","type":"GlyphRenderer"},{"id":"0798fff2-5e3e-4212-adf8-69574e6dbec6","type":"GlyphRenderer"},{"id":"c79de85a-57b6-4059-9dd4-7ac5ddb7b2fb","type":"GlyphRenderer"},{"id":"07d40f50-220b-4a77-b77c-a329c8efd0e7","type":"GlyphRenderer"},{"id":"eb1fb829-0e4b-43af-b0c6-0a78ce0382c5","type":"GlyphRenderer"},{"id":"3ab01ab1-be90-42a2-bc80-588536ed46d9","type":"LinearAxis"},{"id":"bc689496-beab-4876-8949-2907d9f0c73f","type":"CategoricalAxis"},{"id":"28de62f7-b303-4321-8286-a53722eea936","type":"ColorBar"}],"right":[{"id":"28de62f7-b303-4321-8286-a53722eea936","type":"ColorBar"}],"title":{"id":"80386cf0-8496-443f-a137-46dbca64f5ee","type":"Title"},"tool_events":{"id":"dd727a88-f1d3-469e-a3e4-f52d767227a9","type":"ToolEvents"},"toolbar":{"id":"b12a058b-ee22-423f-8841-485ab60fcbcb","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"53c60c75-69e0-4974-af00-2dd59442f03f","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"583ce785-8271-4df1-ba78-81e993907b54","type":"FactorRange"}},"id":"7c4f3d8f-a99f-4a9e-99bf-d2583169edb3","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"0bf06cb2-d502-459d-9701-6ce4ba92e7af","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0,3.25],"x":[12,12,9,12,9],"y":["Tuesday","Wednesday","Thursday","Thursday","Sunday"]}},"id":"4c56f73f-6807-4c32-a100-c52baf6879db","type":"ColumnDataSource"}],"root_ids":["9ac2349b-a253-4ee8-8483-e27cd7b094f1"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"66087d19-b8ed-46aa-ae47-5ba9c8de52fc","elementid":"6b4f1feb-93eb-4ffa-9e73-9f0b8d41bede","modelid":"9ac2349b-a253-4ee8-8483-e27cd7b094f1"}];
                  
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