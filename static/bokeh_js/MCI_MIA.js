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
      };var element = document.getElementById("34a75806-c193-4ae2-a636-771c78eca624");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '34a75806-c193-4ae2-a636-771c78eca624' but no matching script tag was found. ")
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
                  var docs_json = {"135c06f2-0199-4ac1-a716-a82d139542ba":{"roots":{"references":[{"attributes":{"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"}},"id":"4e362144-cc51-4369-a570-578f3bbe881b","type":"SaveTool"},{"attributes":{"data_source":{"id":"beebcfcf-6a56-48d7-8531-3d12fe9d4236","type":"ColumnDataSource"},"glyph":{"id":"e03e4412-3e65-4edc-8e24-b8c22a1545bc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec2b0dac-037a-4227-8ecb-1d2aa17565a9","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b788651f-0c09-4920-a7e5-9645f138ea58","type":"Rect"},{"attributes":{},"id":"b61a0ad1-e8b7-4fd1-a325-52df3f0a63a3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.0],"x":[5],"y":["Wednesday"]}},"id":"98c6bfd1-5369-404d-b368-4b5ec775e15a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"98c6bfd1-5369-404d-b368-4b5ec775e15a","type":"ColumnDataSource"},"glyph":{"id":"0fe35e5f-4bf3-4d2d-9eea-a1eb5624c824","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"47d1725a-5061-44f9-9bf1-6d78bfca19f2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"}},"id":"bd4d0f63-271a-4070-87eb-f0fc1fca70b8","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"c4027cc3-cb7c-4274-9a4e-d350853c8353","type":"ColumnDataSource"},"glyph":{"id":"0e3f01ba-218d-4f6b-94d4-cf1cb83eda67","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4e529a16-2ddb-4374-889c-2c30e3b79dfb","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7ec45ef9-26fa-4a09-a217-82c065062a7b","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d1730220-3df8-4361-958d-7630fd8b5184","type":"PanTool"},{"id":"bd4d0f63-271a-4070-87eb-f0fc1fca70b8","type":"WheelZoomTool"},{"id":"5d4c71ce-61d4-4a6e-a50f-42f3a04a0f37","type":"BoxZoomTool"},{"id":"4e362144-cc51-4369-a570-578f3bbe881b","type":"SaveTool"},{"id":"81b2f4fd-422a-4f8a-ab91-e02fbded34a3","type":"ResetTool"},{"id":"abe3ac4a-debd-473d-ace6-55918bc24e4d","type":"HelpTool"}]},"id":"0327350e-628e-4648-a794-c80ae56fc24d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0],"x":[5],"y":["Thursday"]}},"id":"ace1db0b-c3f6-4dff-957c-a15517023c92","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"a8360927-4b4b-45d3-a755-24ea6189fed9","type":"LinearColorMapper"},"formatter":{"id":"8428478e-1764-47e9-89f4-c60a9c763bfe","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"},"ticker":{"id":"7b9c8f0d-6055-4d83-a0cd-f004f4b5bd03","type":"BasicTicker"}},"id":"3eb8ab76-58aa-4aaf-903e-1a61af430e30","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.404761904761905],"x":[6],"y":["Thursday"]}},"id":"0937c74c-9993-4b78-8b9e-527b66c93a92","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"}},"id":"e97d6378-6c61-4db9-80ac-7a4d99ce81bd","type":"SaveTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"1da1471c-2d2e-4228-9e6f-ab676bad0531","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"},"ticker":{"id":"78087227-b245-408d-84d2-e294b9c00aa8","type":"CategoricalTicker"}},"id":"1a7f5307-d8d0-4164-b757-e8c8ba1733cd","type":"CategoricalAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"98e60100-aa6f-4650-bc95-7b9b043d5012","type":"LinearAxis"}],"left":[{"id":"1a7f5307-d8d0-4164-b757-e8c8ba1733cd","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7ec45ef9-26fa-4a09-a217-82c065062a7b","type":"BoxAnnotation"},{"id":"708370c4-684a-4e0f-81c1-4fb56a9b1bf4","type":"GlyphRenderer"},{"id":"ec2b0dac-037a-4227-8ecb-1d2aa17565a9","type":"GlyphRenderer"},{"id":"0e1e0c59-ac9b-4b80-8205-23e0264c975f","type":"GlyphRenderer"},{"id":"b8eeb7ae-8ca3-4901-8981-1db35240d677","type":"GlyphRenderer"},{"id":"79260931-70df-48e4-86ed-ef0651af11e7","type":"GlyphRenderer"},{"id":"27703b83-fc42-4166-a592-0f633c5e6c93","type":"GlyphRenderer"},{"id":"8ce174fe-63e2-4724-9a6a-05db41a73bca","type":"GlyphRenderer"},{"id":"98e60100-aa6f-4650-bc95-7b9b043d5012","type":"LinearAxis"},{"id":"1a7f5307-d8d0-4164-b757-e8c8ba1733cd","type":"CategoricalAxis"},{"id":"3eb8ab76-58aa-4aaf-903e-1a61af430e30","type":"ColorBar"}],"right":[{"id":"3eb8ab76-58aa-4aaf-903e-1a61af430e30","type":"ColorBar"}],"title":{"id":"88aa1368-69a3-46b2-9130-c4cbab174797","type":"Title"},"tool_events":{"id":"8c7922b3-fd85-4a0b-aefd-4aa6c080d616","type":"ToolEvents"},"toolbar":{"id":"edb0987e-2b1a-4400-8495-fca2cc181077","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"2e9bfe03-70ae-40cc-b8bd-73a8ba94ffda","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0357ebe3-4574-4f7e-b162-b660f8a4e4aa","type":"FactorRange"}},"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"35483c97-c815-4572-a320-a760846d7346","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"},"ticker":{"id":"0f610dad-a377-46ea-bb16-0288ae07f626","type":"CategoricalTicker"}},"id":"2d1d1c32-6796-415a-89af-28e1df8626de","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4eb88e3-ab53-4746-9797-10fad7aa37bd","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.0],"x":[5],"y":["Wednesday"]}},"id":"e214493f-8f58-441e-8f1e-34d91cbc752a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.583333333333333,6.666666666666667,5.142857142857143,5.944444444444445,5.7534246575342465,3.6666666666666665,3.5211267605633805],"x":[6,6,6,6,6,5,6],"y":["Monday","Tuesday","Wednesday","Friday","Saturday","Sunday","Sunday"]}},"id":"211a39c1-5c4a-4039-a6d6-325d60d2e79f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.404761904761905],"x":[6],"y":["Thursday"]}},"id":"16dc5432-9a26-4bc4-bfb6-113da80c994a","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"11290315-ca46-48a4-98cf-95b1b9bd7b5e","type":"Rect"},{"attributes":{},"id":"35483c97-c815-4572-a320-a760846d7346","type":"CategoricalTickFormatter"},{"attributes":{"child":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"fecdeca4-b0dd-42b4-903d-73bc92c3542b","type":"Panel"},{"attributes":{"data_source":{"id":"e214493f-8f58-441e-8f1e-34d91cbc752a","type":"ColumnDataSource"},"glyph":{"id":"b4eb88e3-ab53-4746-9797-10fad7aa37bd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0e1e0c59-ac9b-4b80-8205-23e0264c975f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e3f01ba-218d-4f6b-94d4-cf1cb83eda67","type":"Rect"},{"attributes":{"data_source":{"id":"f92e1387-8fa8-4ed9-9579-de77836cf760","type":"ColumnDataSource"},"glyph":{"id":"c60ad61f-4b73-4a41-ad2a-7d2f27ce0a3b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ce174fe-63e2-4724-9a6a-05db41a73bca","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4b5a898-f7ad-4b5c-90f7-7c691e34a290","type":"Rect"},{"attributes":{"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"}},"id":"81b2f4fd-422a-4f8a-ab91-e02fbded34a3","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f77d520f-51f5-46f5-821a-811a4b0f0f00","type":"Rect"},{"attributes":{"data_source":{"id":"50d85d4e-f4b3-4f43-ae0d-cf45fa6e01a3","type":"ColumnDataSource"},"glyph":{"id":"e030d4d8-863e-4182-b2c9-a07c31776197","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c7590b77-218b-44b1-803f-25a972ceddff","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0],"x":[5],"y":["Friday"]}},"id":"1c399186-0fac-49c4-9ac2-d2c0fc917b29","type":"ColumnDataSource"},{"attributes":{},"id":"78087227-b245-408d-84d2-e294b9c00aa8","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f98d729-bef0-4e0a-91d8-baacee9331a4","type":"PanTool"},{"id":"7996a881-3ee3-4fef-bf97-ade7ff2d365e","type":"WheelZoomTool"},{"id":"6b9213c7-3beb-497f-abd8-54bb0f0db7d8","type":"BoxZoomTool"},{"id":"e97d6378-6c61-4db9-80ac-7a4d99ce81bd","type":"SaveTool"},{"id":"b017d8da-0873-4898-9d5c-31ea3336cfc9","type":"ResetTool"},{"id":"ef0cb7b3-651b-4843-a51f-46b05bbc68e0","type":"HelpTool"}]},"id":"edb0987e-2b1a-4400-8495-fca2cc181077","type":"Toolbar"},{"attributes":{"data_source":{"id":"206efce9-fc2d-41b0-8f2b-532c9241db7f","type":"ColumnDataSource"},"glyph":{"id":"9acc073f-473e-431c-a059-7c373c2fed6e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4750362f-c370-4b19-aac0-e8ffc76bd7cb","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"American Airlines "},"id":"88aa1368-69a3-46b2-9130-c4cbab174797","type":"Title"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"0357ebe3-4574-4f7e-b162-b660f8a4e4aa","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0],"x":[5],"y":["Friday"]}},"id":"c4027cc3-cb7c-4274-9a4e-d350853c8353","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"464c8927-00ad-4778-9abe-c346bb75d41b","type":"BoxAnnotation"},{"attributes":{},"id":"e50f5994-f3e0-41ae-bdf2-9f6312b3241f","type":"BasicTicker"},{"attributes":{"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"}},"id":"d1730220-3df8-4361-958d-7630fd8b5184","type":"PanTool"},{"attributes":{},"id":"c80cf0fe-e404-440a-bfb2-a7210307b04d","type":"ToolEvents"},{"attributes":{"data_source":{"id":"16dc5432-9a26-4bc4-bfb6-113da80c994a","type":"ColumnDataSource"},"glyph":{"id":"190aa6aa-25f0-4a63-b0df-dbb6d2ce780b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef8ef8f1-0a2e-4b89-aaac-26bc458f88a7","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"190aa6aa-25f0-4a63-b0df-dbb6d2ce780b","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.0],"x":[9],"y":["Sunday"]}},"id":"206efce9-fc2d-41b0-8f2b-532c9241db7f","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"fecdeca4-b0dd-42b4-903d-73bc92c3542b","type":"Panel"},{"id":"cb631a0f-6aac-4149-a8f2-1908797e9933","type":"Panel"}]},"id":"80ea6f5b-62e7-4a85-8e87-415aee5a1714","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c60ad61f-4b73-4a41-ad2a-7d2f27ce0a3b","type":"Rect"},{"attributes":{},"id":"1da1471c-2d2e-4228-9e6f-ab676bad0531","type":"CategoricalTickFormatter"},{"attributes":{},"id":"dfd238d2-b947-4306-81df-4c2a4226b379","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1096eb05-ed7b-425c-bff5-82f4723e97de","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"d338b7ac-a7e1-4783-87df-ed68f8af8b7c","type":"LinearAxis"}],"left":[{"id":"2d1d1c32-6796-415a-89af-28e1df8626de","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"464c8927-00ad-4778-9abe-c346bb75d41b","type":"BoxAnnotation"},{"id":"be5bff90-365d-4bdc-87a1-75943bc1f7eb","type":"GlyphRenderer"},{"id":"4750362f-c370-4b19-aac0-e8ffc76bd7cb","type":"GlyphRenderer"},{"id":"47d1725a-5061-44f9-9bf1-6d78bfca19f2","type":"GlyphRenderer"},{"id":"4e529a16-2ddb-4374-889c-2c30e3b79dfb","type":"GlyphRenderer"},{"id":"ef8ef8f1-0a2e-4b89-aaac-26bc458f88a7","type":"GlyphRenderer"},{"id":"c7590b77-218b-44b1-803f-25a972ceddff","type":"GlyphRenderer"},{"id":"fe4112c7-ef6c-4caa-8f34-e918a88a0c9d","type":"GlyphRenderer"},{"id":"d338b7ac-a7e1-4783-87df-ed68f8af8b7c","type":"LinearAxis"},{"id":"2d1d1c32-6796-415a-89af-28e1df8626de","type":"CategoricalAxis"},{"id":"bda41421-f3a5-40b5-9c5b-4653a5382e6f","type":"ColorBar"}],"right":[{"id":"bda41421-f3a5-40b5-9c5b-4653a5382e6f","type":"ColorBar"}],"title":{"id":"0f779d1f-b94f-47e9-a6db-c40359d9c0d9","type":"Title"},"tool_events":{"id":"c80cf0fe-e404-440a-bfb2-a7210307b04d","type":"ToolEvents"},"toolbar":{"id":"0327350e-628e-4648-a794-c80ae56fc24d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"077e393b-539b-4c59-9de6-079dd9aa2eb4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a5c8825e-b1f0-4247-aa44-8979ade7835e","type":"FactorRange"}},"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.583333333333333,6.666666666666667,5.142857142857143,5.944444444444445,5.7534246575342465,3.6666666666666665,3.5211267605633805],"x":[6,6,6,6,6,5,6],"y":["Monday","Tuesday","Wednesday","Friday","Saturday","Sunday","Sunday"]}},"id":"50d85d4e-f4b3-4f43-ae0d-cf45fa6e01a3","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"7ec45ef9-26fa-4a09-a217-82c065062a7b","type":"BoxAnnotation"},"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"}},"id":"6b9213c7-3beb-497f-abd8-54bb0f0db7d8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"}},"id":"7996a881-3ee3-4fef-bf97-ade7ff2d365e","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e0a9f79-4d0e-49af-a458-61aaac564435","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.0],"x":[9],"y":["Sunday"]}},"id":"beebcfcf-6a56-48d7-8531-3d12fe9d4236","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1c399186-0fac-49c4-9ac2-d2c0fc917b29","type":"ColumnDataSource"},"glyph":{"id":"b788651f-0c09-4920-a7e5-9645f138ea58","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8eeb7ae-8ca3-4901-8981-1db35240d677","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"2e9bfe03-70ae-40cc-b8bd-73a8ba94ffda","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"e88c8928-8438-4f0b-bfe4-6ecf4263d750","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"077e393b-539b-4c59-9de6-079dd9aa2eb4","type":"Range1d"},{"attributes":{"child":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"},"title":"AA"},"id":"cb631a0f-6aac-4149-a8f2-1908797e9933","type":"Panel"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a5c8825e-b1f0-4247-aa44-8979ade7835e","type":"FactorRange"},{"attributes":{"data_source":{"id":"211a39c1-5c4a-4039-a6d6-325d60d2e79f","type":"ColumnDataSource"},"glyph":{"id":"f4b5a898-f7ad-4b5c-90f7-7c691e34a290","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"27703b83-fc42-4166-a592-0f633c5e6c93","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0fe35e5f-4bf3-4d2d-9eea-a1eb5624c824","type":"Rect"},{"attributes":{"data_source":{"id":"0937c74c-9993-4b78-8b9e-527b66c93a92","type":"ColumnDataSource"},"glyph":{"id":"11290315-ca46-48a4-98cf-95b1b9bd7b5e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"79260931-70df-48e4-86ed-ef0651af11e7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"}},"id":"abe3ac4a-debd-473d-ace6-55918bc24e4d","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0],"x":[5],"y":["Thursday"]}},"id":"f92e1387-8fa8-4ed9-9579-de77836cf760","type":"ColumnDataSource"},{"attributes":{},"id":"b1d952e8-2339-45b6-aa1e-cd761e971aae","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[5,5,5],"y":["Monday","Tuesday","Saturday"]}},"id":"113f95a9-9842-4da6-b914-e38b1c50db7f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"113f95a9-9842-4da6-b914-e38b1c50db7f","type":"ColumnDataSource"},"glyph":{"id":"f77d520f-51f5-46f5-821a-811a4b0f0f00","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be5bff90-365d-4bdc-87a1-75943bc1f7eb","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a8360927-4b4b-45d3-a755-24ea6189fed9","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9acc073f-473e-431c-a059-7c373c2fed6e","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"b61a0ad1-e8b7-4fd1-a325-52df3f0a63a3","type":"BasicTickFormatter"},"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"},"ticker":{"id":"07e91410-cc03-4dc5-91c8-5b71db6bd924","type":"BasicTicker"}},"id":"98e60100-aa6f-4650-bc95-7b9b043d5012","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[5,5,5],"y":["Monday","Tuesday","Saturday"]}},"id":"b3427a19-f8e8-443b-ba8e-cdd6cc2d914d","type":"ColumnDataSource"},{"attributes":{},"id":"07e91410-cc03-4dc5-91c8-5b71db6bd924","type":"BasicTicker"},{"attributes":{"overlay":{"id":"464c8927-00ad-4778-9abe-c346bb75d41b","type":"BoxAnnotation"},"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"}},"id":"5d4c71ce-61d4-4a6e-a50f-42f3a04a0f37","type":"BoxZoomTool"},{"attributes":{},"id":"97cefcd0-eba1-4c1b-88c6-ab9ad0ecb7a7","type":"BasicTicker"},{"attributes":{"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"}},"id":"b017d8da-0873-4898-9d5c-31ea3336cfc9","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e03e4412-3e65-4edc-8e24-b8c22a1545bc","type":"Rect"},{"attributes":{"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"}},"id":"ef0cb7b3-651b-4843-a51f-46b05bbc68e0","type":"HelpTool"},{"attributes":{"color_mapper":{"id":"e88c8928-8438-4f0b-bfe4-6ecf4263d750","type":"LinearColorMapper"},"formatter":{"id":"b1d952e8-2339-45b6-aa1e-cd761e971aae","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"},"ticker":{"id":"e50f5994-f3e0-41ae-bdf2-9f6312b3241f","type":"BasicTicker"}},"id":"bda41421-f3a5-40b5-9c5b-4653a5382e6f","type":"ColorBar"},{"attributes":{"plot":{"id":"cdb62423-9a46-4dcd-9914-b5b734c75e6a","subtype":"Chart","type":"Plot"}},"id":"7f98d729-bef0-4e0a-91d8-baacee9331a4","type":"PanTool"},{"attributes":{},"id":"7b9c8f0d-6055-4d83-a0cd-f004f4b5bd03","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e030d4d8-863e-4182-b2c9-a07c31776197","type":"Rect"},{"attributes":{},"id":"8428478e-1764-47e9-89f4-c60a9c763bfe","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"0f779d1f-b94f-47e9-a6db-c40359d9c0d9","type":"Title"},{"attributes":{"data_source":{"id":"b3427a19-f8e8-443b-ba8e-cdd6cc2d914d","type":"ColumnDataSource"},"glyph":{"id":"1096eb05-ed7b-425c-bff5-82f4723e97de","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"708370c4-684a-4e0f-81c1-4fb56a9b1bf4","type":"GlyphRenderer"},{"attributes":{},"id":"8c7922b3-fd85-4a0b-aefd-4aa6c080d616","type":"ToolEvents"},{"attributes":{},"id":"0f610dad-a377-46ea-bb16-0288ae07f626","type":"CategoricalTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"dfd238d2-b947-4306-81df-4c2a4226b379","type":"BasicTickFormatter"},"plot":{"id":"3dce4199-adc3-4c97-8264-c99b67f83faa","subtype":"Chart","type":"Plot"},"ticker":{"id":"97cefcd0-eba1-4c1b-88c6-ab9ad0ecb7a7","type":"BasicTicker"}},"id":"d338b7ac-a7e1-4783-87df-ed68f8af8b7c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"ace1db0b-c3f6-4dff-957c-a15517023c92","type":"ColumnDataSource"},"glyph":{"id":"5e0a9f79-4d0e-49af-a458-61aaac564435","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fe4112c7-ef6c-4caa-8f34-e918a88a0c9d","type":"GlyphRenderer"}],"root_ids":["80ea6f5b-62e7-4a85-8e87-415aee5a1714"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"135c06f2-0199-4ac1-a716-a82d139542ba","elementid":"34a75806-c193-4ae2-a636-771c78eca624","modelid":"80ea6f5b-62e7-4a85-8e87-415aee5a1714"}];
                  
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