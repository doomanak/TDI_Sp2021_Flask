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
      };var element = document.getElementById("20da6554-eb46-4c51-a916-694dff77c1f6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20da6554-eb46-4c51-a916-694dff77c1f6' but no matching script tag was found. ")
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
                  var docs_json = {"b4dc0aa4-9853-440b-b5b8-b19c8aab72ad":{"roots":{"references":[{"attributes":{},"id":"8d34a0a9-f2bf-4003-88ed-f1e340f5c87a","type":"CategoricalTicker"},{"attributes":{"child":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"0599a246-60f9-49e1-9bef-bcf10f15e548","type":"Panel"},{"attributes":{},"id":"a82d7954-4321-49aa-aafd-7a2c5bbbc449","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a82d7954-4321-49aa-aafd-7a2c5bbbc449","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"},"ticker":{"id":"39cc826e-b124-4591-9732-af3e92be13df","type":"CategoricalTicker"}},"id":"1c4b48d5-2eeb-41de-9ce2-0e55985aa7b3","type":"CategoricalAxis"},{"attributes":{},"id":"ba99dd76-e000-4c4a-97b9-dda3e9421a96","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"8a1ac02e-080d-4007-99bd-b78c3daf6563","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"},"ticker":{"id":"8d34a0a9-f2bf-4003-88ed-f1e340f5c87a","type":"CategoricalTicker"}},"id":"98486fa7-8980-4eba-a8d7-b10c7e43b04d","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"4a7b57ac-205a-4907-93ce-151fcf27e94b","type":"ColumnDataSource"},"glyph":{"id":"430fe7b8-9cad-4616-b837-15991e41be3a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"692dfc8b-85cd-415a-baed-bd2680b6dc88","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"708b1302-2bec-440c-94f2-347f163a2470","type":"ColumnDataSource"},"glyph":{"id":"964feb07-6dc7-4409-af90-2109ddbbfcad","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8b2b8bc4-8359-4437-b711-1a3ee67303ec","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"22e65107-7c86-47ff-b0e1-0430dbb57f7e","type":"LinearColorMapper"},"formatter":{"id":"60748c02-9fa6-4b9b-838f-7cbf1f0a2f8a","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"},"ticker":{"id":"ff87db89-cdb2-4580-b0ba-9aff8abd55ae","type":"BasicTicker"}},"id":"60aefa68-d82d-456b-8108-7d8844ad2fcb","type":"ColorBar"},{"attributes":{"data_source":{"id":"a661cec4-2159-464b-be7e-3136ca3e7213","type":"ColumnDataSource"},"glyph":{"id":"3e1a4cf0-02de-4ac2-8480-5693f05818fb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b0b882d8-5160-479a-b519-ce40da9aca66","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"07e3bfec-e351-498c-8190-e34627d05c3d","type":"PanTool"},{"id":"eb5ed36d-79a1-4f48-8759-f4df130e19e4","type":"WheelZoomTool"},{"id":"77b77acb-dc05-4670-80d6-d6831194e93a","type":"BoxZoomTool"},{"id":"6eb20a54-6605-428d-8cbf-2fe9e7c3b4a2","type":"SaveTool"},{"id":"9a2d40c7-2d7d-49ae-909e-7e095ffafebd","type":"ResetTool"},{"id":"1baba78f-b169-4194-84ed-b044c9ccc67e","type":"HelpTool"}]},"id":"dbff008b-e38b-4037-b9d8-f4e9a6359264","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ecc4369-1ac3-4e93-905b-f5b062eb897e","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"ba99dd76-e000-4c4a-97b9-dda3e9421a96","type":"BasicTickFormatter"},"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"},"ticker":{"id":"e32567fa-cb3b-494e-ada5-96f1b5221e46","type":"BasicTicker"}},"id":"3b7e6dd7-5de1-469c-a203-1f56271131a5","type":"LinearAxis"},{"attributes":{"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"}},"id":"4ccb052a-147c-4b20-8b2c-51c4c8331368","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"babc6b3f-f601-4091-9875-f15670323871","type":"ColumnDataSource"},"glyph":{"id":"e94732e6-374a-4f7a-9468-a5c7920e562d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1cb8e2a7-ad1b-41a9-952a-d24fb0f06deb","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.019354838709678,9.441176470588236,8.922077922077921],"x":[6,17,6],"y":["Tuesday","Friday","Sunday"]}},"id":"e5638286-3dc6-4581-80de-f829c5539d93","type":"ColumnDataSource"},{"attributes":{},"id":"7241f94c-d0e4-486a-b8de-b8fc16e421d7","type":"BasicTicker"},{"attributes":{"overlay":{"id":"43e60fb3-e924-4990-8972-4b3302c2577e","type":"BoxAnnotation"},"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"}},"id":"9e88f308-13c0-47f8-a7a8-78075f71c3be","type":"BoxZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"0599a246-60f9-49e1-9bef-bcf10f15e548","type":"Panel"},{"id":"213ae367-b8c8-4bae-b548-0fee3950daf2","type":"Panel"}]},"id":"63b69b01-e32d-426f-bddf-8feda29f5c65","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a313042e-a0b0-4a27-853a-6b09e29d3f3b","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.666666666666666,10.357615894039736,10.851612903225806,12.780645161290323],"x":[17,6,6,6],"y":["Monday","Wednesday","Thursday","Friday"]}},"id":"4a7b57ac-205a-4907-93ce-151fcf27e94b","type":"ColumnDataSource"},{"attributes":{},"id":"68c5e511-8e31-4127-aa1e-c1470aed3cc1","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"090f5f6c-3068-475f-868a-03f6ab473f4f","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3e1a4cf0-02de-4ac2-8480-5693f05818fb","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"4d65cad7-099a-4e68-9250-6f6a3688ff51","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.172413793103448,16.416666666666668,15.363636363636363],"x":[17,12,17],"y":["Tuesday","Thursday","Saturday"]}},"id":"92b39315-a0d1-425f-a9b5-6f109bcbf43b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.666666666666666,10.357615894039736,10.851612903225806,12.780645161290323],"x":[17,6,6,6],"y":["Monday","Wednesday","Thursday","Friday"]}},"id":"f501a928-715f-44dd-bbf3-4902b4a86033","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7e7bc9c2-72c8-4a55-b887-c25442e20c49","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"92b39315-a0d1-425f-a9b5-6f109bcbf43b","type":"ColumnDataSource"},"glyph":{"id":"0dedb8c3-ce20-458b-85d1-84093a13d7ef","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ce3c6c28-e174-43e9-8256-7c65f2b0a9eb","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4307a022-9f1b-4439-ae17-c02a0e250b1d","type":"Rect"},{"attributes":{},"id":"60748c02-9fa6-4b9b-838f-7cbf1f0a2f8a","type":"BasicTickFormatter"},{"attributes":{},"id":"aac83529-fbfd-4cc1-b33d-689b7b31e71e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"57b63357-a7f8-46aa-9756-4c67d5e3ad51","type":"ColumnDataSource"},"glyph":{"id":"054cff4f-c94e-4aab-bdde-091d9176dbb1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b6483f94-0efe-490a-ac3f-e0047e4b5511","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"57b6afb3-04bb-412a-ac25-eef8618b0b09","type":"PanTool"},{"id":"4ccb052a-147c-4b20-8b2c-51c4c8331368","type":"WheelZoomTool"},{"id":"9e88f308-13c0-47f8-a7a8-78075f71c3be","type":"BoxZoomTool"},{"id":"d10d853c-fa38-4e1c-ad71-a99d42e8d1c2","type":"SaveTool"},{"id":"bac83738-e6a0-4dfb-9a54-817c8ec9b50c","type":"ResetTool"},{"id":"24b535ba-a658-4080-a3b0-06dc39ade48c","type":"HelpTool"}]},"id":"b537f41d-5db4-4200-bfbc-071b2972b7a6","type":"Toolbar"},{"attributes":{"data_source":{"id":"b5456246-ba1c-482b-af73-4b7a9949996c","type":"ColumnDataSource"},"glyph":{"id":"867595d4-f50b-4fa4-b7e6-a4aadeeb4461","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"51fce376-7ea4-4df6-bd0e-59423a498dd6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"}},"id":"24b535ba-a658-4080-a3b0-06dc39ade48c","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"3605e5cd-2e13-46ea-902d-dce5e5bb6773","type":"LinearColorMapper"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"22e65107-7c86-47ff-b0e1-0430dbb57f7e","type":"LinearColorMapper"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"11ef9d7c-34f6-4a62-bd1f-145e4a3a2478","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e94732e6-374a-4f7a-9468-a5c7920e562d","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"393973c5-09ee-45ad-978e-a61a999d2015","type":"Rect"},{"attributes":{"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"}},"id":"d10d853c-fa38-4e1c-ad71-a99d42e8d1c2","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.939393939393938],"x":[17],"y":["Sunday"]}},"id":"57b63357-a7f8-46aa-9756-4c67d5e3ad51","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"964feb07-6dc7-4409-af90-2109ddbbfcad","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"8fea8829-29f6-4970-9d57-666d56e48dba","type":"Title"},{"attributes":{},"id":"df5d0e38-76a8-4608-83e0-7e52acf95bb8","type":"BasicTicker"},{"attributes":{},"id":"39cc826e-b124-4591-9732-af3e92be13df","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"9bc3a7b5-2447-4ef7-ab72-5484bf597fbc","type":"ColumnDataSource"},"glyph":{"id":"9e7fe2cd-50af-4575-ab02-95498a986e85","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"18100cc0-29de-40a3-b969-ff5b9f161edf","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"430fe7b8-9cad-4616-b837-15991e41be3a","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3b7e6dd7-5de1-469c-a203-1f56271131a5","type":"LinearAxis"}],"left":[{"id":"98486fa7-8980-4eba-a8d7-b10c7e43b04d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7e7bc9c2-72c8-4a55-b887-c25442e20c49","type":"BoxAnnotation"},{"id":"5cffe5df-d76e-480c-8299-035cf0b860a4","type":"GlyphRenderer"},{"id":"b6483f94-0efe-490a-ac3f-e0047e4b5511","type":"GlyphRenderer"},{"id":"84f4a8c8-360e-4369-b4e0-18d997fe8b85","type":"GlyphRenderer"},{"id":"8b2b8bc4-8359-4437-b711-1a3ee67303ec","type":"GlyphRenderer"},{"id":"51fce376-7ea4-4df6-bd0e-59423a498dd6","type":"GlyphRenderer"},{"id":"f80f0912-47b0-4f44-8ae0-9dc3b6e08d11","type":"GlyphRenderer"},{"id":"040f0af1-8a58-443c-85e8-454d8cc6326d","type":"GlyphRenderer"},{"id":"b58c1640-96e2-46a8-bf36-05f98ab00589","type":"GlyphRenderer"},{"id":"3b7e6dd7-5de1-469c-a203-1f56271131a5","type":"LinearAxis"},{"id":"98486fa7-8980-4eba-a8d7-b10c7e43b04d","type":"CategoricalAxis"},{"id":"60aefa68-d82d-456b-8108-7d8844ad2fcb","type":"ColorBar"}],"right":[{"id":"60aefa68-d82d-456b-8108-7d8844ad2fcb","type":"ColorBar"}],"title":{"id":"8fea8829-29f6-4970-9d57-666d56e48dba","type":"Title"},"tool_events":{"id":"68c5e511-8e31-4127-aa1e-c1470aed3cc1","type":"ToolEvents"},"toolbar":{"id":"dbff008b-e38b-4037-b9d8-f4e9a6359264","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c4cd0595-2b58-45b8-8a3b-a161df7b04b8","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4d65cad7-099a-4e68-9250-6f6a3688ff51","type":"FactorRange"}},"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"}},"id":"1baba78f-b169-4194-84ed-b044c9ccc67e","type":"HelpTool"},{"attributes":{"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"}},"id":"eb5ed36d-79a1-4f48-8759-f4df130e19e4","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"43e60fb3-e924-4990-8972-4b3302c2577e","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"284f3da6-55ec-4e65-a15b-8c3290c304a7","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"eadf7144-6955-46f4-a432-afdbe24b13c1","type":"Range1d"},{"attributes":{"callback":null,"end":23},"id":"c4cd0595-2b58-45b8-8a3b-a161df7b04b8","type":"Range1d"},{"attributes":{"child":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"},"title":"AA"},"id":"213ae367-b8c8-4bae-b548-0fee3950daf2","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.652173913043477,22.646341463414632,21.857142857142858,20.76829268292683],"x":[12,16,12,16],"y":["Monday","Friday","Sunday","Sunday"]}},"id":"0fb90a62-4d9d-4211-9794-23ce63e21c33","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"}},"id":"9a2d40c7-2d7d-49ae-909e-7e095ffafebd","type":"ResetTool"},{"attributes":{},"id":"702cde2a-2b30-426c-b204-7e97740bbac4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3e97b399-57b9-403d-852c-5aadbf019386","type":"ColumnDataSource"},"glyph":{"id":"eb03d29e-fb9b-4a0f-9056-37282d7e9c68","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b58c1640-96e2-46a8-bf36-05f98ab00589","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7e7bc9c2-72c8-4a55-b887-c25442e20c49","type":"BoxAnnotation"},"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"}},"id":"77b77acb-dc05-4670-80d6-d6831194e93a","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.652173913043477,22.646341463414632,21.857142857142858,20.76829268292683],"x":[12,16,12,16],"y":["Monday","Friday","Sunday","Sunday"]}},"id":"9bc3a7b5-2447-4ef7-ab72-5484bf597fbc","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"867595d4-f50b-4fa4-b7e6-a4aadeeb4461","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.352564102564102,19.93975903614458,17.972972972972972,17.484848484848484,19.45679012345679,18.269736842105264],"x":[6,16,16,17,16,6],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Saturday"]}},"id":"708b1302-2bec-440c-94f2-347f163a2470","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0],"x":[12,12,19],"y":["Tuesday","Wednesday","Sunday"]}},"id":"babc6b3f-f601-4091-9875-f15670323871","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e7fe2cd-50af-4575-ab02-95498a986e85","type":"Rect"},{"attributes":{},"id":"e6501362-c6d0-4e22-9b19-e5a96ffce6e7","type":"ToolEvents"},{"attributes":{},"id":"8a1ac02e-080d-4007-99bd-b78c3daf6563","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"}},"id":"57b6afb3-04bb-412a-ac25-eef8618b0b09","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"fe794fe4-1edd-4c42-b434-d897749b5515","type":"LinearAxis"}],"left":[{"id":"1c4b48d5-2eeb-41de-9ce2-0e55985aa7b3","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"43e60fb3-e924-4990-8972-4b3302c2577e","type":"BoxAnnotation"},{"id":"6776a538-3a6f-496d-8b99-3438f4e41947","type":"GlyphRenderer"},{"id":"1aa4c868-10d7-43fe-b906-bc5b9a8c7c82","type":"GlyphRenderer"},{"id":"18100cc0-29de-40a3-b969-ff5b9f161edf","type":"GlyphRenderer"},{"id":"b0b882d8-5160-479a-b519-ce40da9aca66","type":"GlyphRenderer"},{"id":"ce3c6c28-e174-43e9-8256-7c65f2b0a9eb","type":"GlyphRenderer"},{"id":"692dfc8b-85cd-415a-baed-bd2680b6dc88","type":"GlyphRenderer"},{"id":"81b13953-a2c8-4991-be2d-501a5b1c71f6","type":"GlyphRenderer"},{"id":"1cb8e2a7-ad1b-41a9-952a-d24fb0f06deb","type":"GlyphRenderer"},{"id":"fe794fe4-1edd-4c42-b434-d897749b5515","type":"LinearAxis"},{"id":"1c4b48d5-2eeb-41de-9ce2-0e55985aa7b3","type":"CategoricalAxis"},{"id":"69010bc7-5344-46bf-9dd8-e344dfa9f4cf","type":"ColorBar"}],"right":[{"id":"69010bc7-5344-46bf-9dd8-e344dfa9f4cf","type":"ColorBar"}],"title":{"id":"8cf597c3-67e1-4371-91b6-0a1ea8835b82","type":"Title"},"tool_events":{"id":"e6501362-c6d0-4e22-9b19-e5a96ffce6e7","type":"ToolEvents"},"toolbar":{"id":"b537f41d-5db4-4200-bfbc-071b2972b7a6","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"eadf7144-6955-46f4-a432-afdbe24b13c1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"11ef9d7c-34f6-4a62-bd1f-145e4a3a2478","type":"FactorRange"}},"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"f501a928-715f-44dd-bbf3-4902b4a86033","type":"ColumnDataSource"},"glyph":{"id":"284f3da6-55ec-4e65-a15b-8c3290c304a7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f80f0912-47b0-4f44-8ae0-9dc3b6e08d11","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.172413793103448,16.416666666666668,15.363636363636363],"x":[17,12,17],"y":["Tuesday","Thursday","Saturday"]}},"id":"b5456246-ba1c-482b-af73-4b7a9949996c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"82915df1-70da-43f8-be2e-a26aa0001305","type":"ColumnDataSource"},"glyph":{"id":"3ecc4369-1ac3-4e93-905b-f5b062eb897e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5cffe5df-d76e-480c-8299-035cf0b860a4","type":"GlyphRenderer"},{"attributes":{},"id":"e32567fa-cb3b-494e-ada5-96f1b5221e46","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"3605e5cd-2e13-46ea-902d-dce5e5bb6773","type":"LinearColorMapper"},"formatter":{"id":"aac83529-fbfd-4cc1-b33d-689b7b31e71e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"},"ticker":{"id":"7241f94c-d0e4-486a-b8de-b8fc16e421d7","type":"BasicTicker"}},"id":"69010bc7-5344-46bf-9dd8-e344dfa9f4cf","type":"ColorBar"},{"attributes":{"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"}},"id":"6eb20a54-6605-428d-8cbf-2fe9e7c3b4a2","type":"SaveTool"},{"attributes":{"plot":null,"text":"American Airlines "},"id":"8cf597c3-67e1-4371-91b6-0a1ea8835b82","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.352564102564102,19.93975903614458,17.972972972972972,17.484848484848484,19.45679012345679,18.269736842105264],"x":[6,16,16,17,16,6],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Saturday"]}},"id":"a661cec4-2159-464b-be7e-3136ca3e7213","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,29.391304347826086,29.304347826086957,28.035714285714285],"x":[16,17,12,12,16],"y":["Wednesday","Thursday","Friday","Saturday","Saturday"]}},"id":"82915df1-70da-43f8-be2e-a26aa0001305","type":"ColumnDataSource"},{"attributes":{},"id":"ff87db89-cdb2-4580-b0ba-9aff8abd55ae","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.019354838709678,9.441176470588236,8.922077922077921],"x":[6,17,6],"y":["Tuesday","Friday","Sunday"]}},"id":"685c6151-f044-429c-a264-fc8b9b223dd4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,29.391304347826086,29.304347826086957,28.035714285714285],"x":[16,17,12,12,16],"y":["Wednesday","Thursday","Friday","Saturday","Saturday"]}},"id":"545ccbc3-499f-46cb-85f9-6ac7e3a5d9f1","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"054cff4f-c94e-4aab-bdde-091d9176dbb1","type":"Rect"},{"attributes":{"data_source":{"id":"685c6151-f044-429c-a264-fc8b9b223dd4","type":"ColumnDataSource"},"glyph":{"id":"e97bac57-f6ce-4455-8d60-40118603360d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"81b13953-a2c8-4991-be2d-501a5b1c71f6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0],"x":[12,12,19],"y":["Tuesday","Wednesday","Sunday"]}},"id":"3e97b399-57b9-403d-852c-5aadbf019386","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"269fa995-d261-44e5-b308-9c7a0fc4f0f2","type":"ColumnDataSource"},"glyph":{"id":"a313042e-a0b0-4a27-853a-6b09e29d3f3b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1aa4c868-10d7-43fe-b906-bc5b9a8c7c82","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.939393939393938],"x":[17],"y":["Sunday"]}},"id":"269fa995-d261-44e5-b308-9c7a0fc4f0f2","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"702cde2a-2b30-426c-b204-7e97740bbac4","type":"BasicTickFormatter"},"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"},"ticker":{"id":"df5d0e38-76a8-4608-83e0-7e52acf95bb8","type":"BasicTicker"}},"id":"fe794fe4-1edd-4c42-b434-d897749b5515","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb03d29e-fb9b-4a0f-9056-37282d7e9c68","type":"Rect"},{"attributes":{"data_source":{"id":"545ccbc3-499f-46cb-85f9-6ac7e3a5d9f1","type":"ColumnDataSource"},"glyph":{"id":"090f5f6c-3068-475f-868a-03f6ab473f4f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6776a538-3a6f-496d-8b99-3438f4e41947","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e97bac57-f6ce-4455-8d60-40118603360d","type":"Rect"},{"attributes":{"plot":{"id":"d6e7f052-f753-4bce-ac63-250c6733b5e5","subtype":"Chart","type":"Plot"}},"id":"bac83738-e6a0-4dfb-9a54-817c8ec9b50c","type":"ResetTool"},{"attributes":{"plot":{"id":"25827b8d-d959-4752-9451-89c40ad3cb3f","subtype":"Chart","type":"Plot"}},"id":"07e3bfec-e351-498c-8190-e34627d05c3d","type":"PanTool"},{"attributes":{"data_source":{"id":"0fb90a62-4d9d-4211-9794-23ce63e21c33","type":"ColumnDataSource"},"glyph":{"id":"4307a022-9f1b-4439-ae17-c02a0e250b1d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"84f4a8c8-360e-4369-b4e0-18d997fe8b85","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e5638286-3dc6-4581-80de-f829c5539d93","type":"ColumnDataSource"},"glyph":{"id":"393973c5-09ee-45ad-978e-a61a999d2015","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"040f0af1-8a58-443c-85e8-454d8cc6326d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0dedb8c3-ce20-458b-85d1-84093a13d7ef","type":"Rect"}],"root_ids":["63b69b01-e32d-426f-bddf-8feda29f5c65"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"b4dc0aa4-9853-440b-b5b8-b19c8aab72ad","elementid":"20da6554-eb46-4c51-a916-694dff77c1f6","modelid":"63b69b01-e32d-426f-bddf-8feda29f5c65"}];
                  
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