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
      };var element = document.getElementById("c92ed5e5-4383-4f64-b563-5f5683bf174b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c92ed5e5-4383-4f64-b563-5f5683bf174b' but no matching script tag was found. ")
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
                  var docs_json = {"c0ffe46e-98b2-4a0d-8835-98f831708b9c":{"roots":{"references":[{"attributes":{"data_source":{"id":"ff0dddc2-6f9d-410c-8ac5-0335d3e4f131","type":"ColumnDataSource"},"glyph":{"id":"1171a27e-4ed5-484f-869a-f9bde9768844","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a422fff5-e8bf-4bc6-8e6c-12315cce1657","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fefbbf07-9cdc-4a6c-8a38-9c732fe772d9","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"400bc63b-f951-475b-8c29-3ae9e82f0539","type":"Rect"},{"attributes":{"data_source":{"id":"0fce4f50-4c9b-4d91-a29d-d7287ac7fef5","type":"ColumnDataSource"},"glyph":{"id":"c3efda0b-f9b6-4b28-b572-f19ccde2c5ce","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87c29d16-094c-4728-8930-f8c6aa63315f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cee4da05-f7c3-4129-80a0-da372a898650","type":"ColumnDataSource"},"glyph":{"id":"66d2fb87-de36-46a6-aae3-8525ec12c778","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cbb4fed8-400d-4812-ad71-20afa31bd5ac","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"28ebdd4d-1f2a-450f-9efb-ef533782a19d","type":"Rect"},{"attributes":{},"id":"27f74915-c9a5-428b-b180-c5e03282aa8c","type":"BasicTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"c269a568-e4b6-4aa3-8f31-c4b0f191e2e2","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16, 18]","(16, 18]","(16, 18]"],"chart_index":[{"POS_ARR_DELAY":"(16, 18]"},{"POS_ARR_DELAY":"(16, 18]"},{"POS_ARR_DELAY":"(16, 18]"}],"values":[16.735632183908045,18.0,17.428571428571427],"x":[18,16,18],"y":["Thursday","Friday","Sunday"]}},"id":"0fce4f50-4c9b-4d91-a29d-d7287ac7fef5","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c03970c0-e2fa-4275-99a7-5195d4359ca0","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"},"ticker":{"id":"6f94fe13-4272-4d50-b133-b8adde50a6e7","type":"CategoricalTicker"}},"id":"8e328d43-7eed-4d07-b7e9-e4859cf9e645","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9d282e07-9a78-4c2d-a1fb-978d167a37fa","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"652f7303-3140-4791-a18b-0fd3c224582f","type":"FactorRange"},{"attributes":{"data_source":{"id":"d3a49637-abd7-4866-b9c6-fb6839c47b58","type":"ColumnDataSource"},"glyph":{"id":"930213d3-3274-4710-976b-4028734a6d14","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dff6401f-7cec-49a7-9306-9e8d8c7587e7","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"93d7d418-2d4d-4273-b678-e944e269faec","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8fe37391-6415-49e2-a0b1-04fedd931a1c","type":"PanTool"},{"id":"36bfc7d4-3e51-4e29-b7a5-21c439cefafd","type":"WheelZoomTool"},{"id":"8083947a-df4c-4e94-b158-ccaed12b202a","type":"BoxZoomTool"},{"id":"f4cd03f4-214b-4ca3-863d-212f0f433358","type":"SaveTool"},{"id":"9ce789d1-afda-4285-ace9-72795803cc7f","type":"ResetTool"},{"id":"13b2d312-cce7-44f5-98e2-35d7c73ea4e8","type":"HelpTool"}]},"id":"a70b0281-9837-486b-99f3-b688569bcc51","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4d7dd54-fd61-41e3-8513-a9081a92ac4b","type":"Rect"},{"attributes":{"data_source":{"id":"6c1b99e3-03db-4914-958c-bf1a1cc27b27","type":"ColumnDataSource"},"glyph":{"id":"400bc63b-f951-475b-8c29-3ae9e82f0539","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f717aa03-fb26-4037-953d-604323bb5796","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10.5, 11.7]"],"chart_index":[{"POS_ARR_DELAY":"(10.5, 11.7]"}],"values":[11.471698113207546],"x":[18],"y":["Wednesday"]}},"id":"c3474064-1ed1-4fac-a293-424a2e996d42","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ad79609-4f3e-40ba-b900-ddeeba42ebdf","type":"Rect"},{"attributes":{"data_source":{"id":"cc85f127-8743-4eaa-8244-a3a907e846f9","type":"ColumnDataSource"},"glyph":{"id":"7ad79609-4f3e-40ba-b900-ddeeba42ebdf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"813d5e18-aa78-481a-bf09-44a4319b664a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"33f30ac9-2949-427b-8d6e-bed9933e0818","type":"ColumnDataSource"},"glyph":{"id":"18e6e846-c84f-4dd9-bf92-b9456c7491b8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"88e6e96b-d0b0-4a29-a178-1e663f1b475e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"70de4bff-a947-4115-ab19-61042cecc91a","type":"BoxAnnotation"},"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"}},"id":"672b5e97-b6ad-4a66-a9bd-67d47fd25099","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"94b3880b-f9d3-432c-9b49-b09fde1b4d82","type":"BasicTickFormatter"},"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"},"ticker":{"id":"e3ad2d2f-2937-43b9-8b01-fa9bebf138a8","type":"BasicTicker"}},"id":"6ebd5991-3ccb-463d-b1f4-7dd4a0862ca5","type":"LinearAxis"},{"attributes":{},"id":"0566a013-9d04-47e3-9683-50a0ede036ed","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"154929ff-204b-4fc1-9c8a-e1692a5a1dde","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"788d3272-5103-492b-a54c-e88b0970383e","type":"Range1d"},{"attributes":{"overlay":{"id":"193875e8-5b31-4a03-b86d-426023d19d08","type":"BoxAnnotation"},"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"}},"id":"8083947a-df4c-4e94-b158-ccaed12b202a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"}},"id":"8fe37391-6415-49e2-a0b1-04fedd931a1c","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee2ca39f-5d96-47ae-9515-4c40b1b231ac","type":"Rect"},{"attributes":{},"id":"d4d561ca-639b-47f6-900d-245d9baf1242","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"}},"id":"43eb8644-2205-490d-9e3a-e640952a6d91","type":"PanTool"},{"attributes":{"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"}},"id":"36bfc7d4-3e51-4e29-b7a5-21c439cefafd","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"1052a03d-4c76-456a-ab2f-ba9b41b50b10","type":"Panel"},{"id":"51502b69-9f21-4f41-a43d-5f2cc0e65051","type":"Panel"},{"id":"64b831b4-50e0-431a-b7b5-da0e47989eeb","type":"Panel"}]},"id":"ea5c66f0-a248-4d55-90e8-59a81c198e40","type":"Tabs"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"6ebd5991-3ccb-463d-b1f4-7dd4a0862ca5","type":"LinearAxis"}],"left":[{"id":"d4ea6ee1-e68f-458f-b5b4-205aa0b8ae02","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ad1a01c3-36ee-4f91-8fcb-df4c82dea8af","type":"BoxAnnotation"},{"id":"d610acb3-2790-4e94-83e7-7d3f0d25f21e","type":"GlyphRenderer"},{"id":"55dd0e8d-e109-4ed5-bd4d-8b9d452487e3","type":"GlyphRenderer"},{"id":"8b815f3b-5eb4-43dd-b8da-24b82509ff08","type":"GlyphRenderer"},{"id":"88e6e96b-d0b0-4a29-a178-1e663f1b475e","type":"GlyphRenderer"},{"id":"b5ebf87f-14cd-4aba-b468-67363e0a7895","type":"GlyphRenderer"},{"id":"1c2c5912-2ce0-4517-9c59-5862aa54ad5d","type":"GlyphRenderer"},{"id":"5767e3d1-70e9-4b32-a745-fb53da7fc261","type":"GlyphRenderer"},{"id":"5b1787b2-d7a9-494f-b542-3cd071707698","type":"GlyphRenderer"},{"id":"6ebd5991-3ccb-463d-b1f4-7dd4a0862ca5","type":"LinearAxis"},{"id":"d4ea6ee1-e68f-458f-b5b4-205aa0b8ae02","type":"CategoricalAxis"},{"id":"1e270468-2d15-4a7f-a2e3-1a9d87b58ee5","type":"ColorBar"}],"right":[{"id":"1e270468-2d15-4a7f-a2e3-1a9d87b58ee5","type":"ColorBar"}],"title":{"id":"d218a2f7-e0b8-4014-b733-7b95eb8fd8cd","type":"Title"},"tool_events":{"id":"ddeaa518-d723-49f8-9d84-f86c7fe924a6","type":"ToolEvents"},"toolbar":{"id":"43403ee8-7614-44db-a964-f902ce7ba89a","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"788d3272-5103-492b-a54c-e88b0970383e","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5d706bd4-fa6c-4412-9fbb-ee66aa0fdd33","type":"FactorRange"}},"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"aa508f66-47e3-4a1a-9349-5ffa80ff85fb","type":"ColumnDataSource"},"glyph":{"id":"fefbbf07-9cdc-4a6c-8a38-9c732fe772d9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7dc8556-e53d-4ebf-a874-952cdad7b711","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fe5e1810-0a97-4bf9-8e51-a91aee150739","type":"ColumnDataSource"},"glyph":{"id":"d97eb17a-21c5-47c5-b028-6cc3f9646ed9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"55dd0e8d-e109-4ed5-bd4d-8b9d452487e3","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e346f844-84ec-4601-ad26-e0ba044b2a63","type":"ColumnDataSource"},"glyph":{"id":"93d7d418-2d4d-4273-b678-e944e269faec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2ac5d9a6-f212-4595-9d15-e2f284e42637","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.02, 2]","[-0.02, 2]","[-0.02, 2]","[-0.02, 2]"],"chart_index":[{"POS_ARR_DELAY":"[-0.02, 2]"},{"POS_ARR_DELAY":"[-0.02, 2]"},{"POS_ARR_DELAY":"[-0.02, 2]"},{"POS_ARR_DELAY":"[-0.02, 2]"}],"values":[0.0,0.0,0.0,0.0],"x":[22,19,19,17],"y":["Monday","Wednesday","Thursday","Saturday"]}},"id":"cc85f127-8743-4eaa-8244-a3a907e846f9","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"54bfd8c0-342e-4bb8-8a13-025ab60e45cc","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d97eb17a-21c5-47c5-b028-6cc3f9646ed9","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8, 10]"],"chart_index":[{"POS_ARR_DELAY":"(8, 10]"}],"values":[9.698412698412698],"x":[18],"y":["Monday"]}},"id":"b23c68fc-fe1f-4e22-a3c8-19f58ffad371","type":"ColumnDataSource"},{"attributes":{},"id":"6f94fe13-4272-4d50-b133-b8adde50a6e7","type":"CategoricalTicker"},{"attributes":{},"id":"e3ad2d2f-2937-43b9-8b01-fa9bebf138a8","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2b071e1b-23bd-44b0-a260-0ef804240068","type":"ColumnDataSource"},"glyph":{"id":"9d282e07-9a78-4c2d-a1fb-978d167a37fa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d610acb3-2790-4e94-83e7-7d3f0d25f21e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"ad1a01c3-36ee-4f91-8fcb-df4c82dea8af","type":"BoxAnnotation"},"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"}},"id":"9af36bd6-dd55-4ef9-aff8-df85bd224c89","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"c3474064-1ed1-4fac-a293-424a2e996d42","type":"ColumnDataSource"},"glyph":{"id":"9f3bb9a6-5eab-4f52-990d-1d583d15f099","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b5ebf87f-14cd-4aba-b468-67363e0a7895","type":"GlyphRenderer"},{"attributes":{},"id":"42ce2059-d942-4abb-9a80-88198140bee2","type":"CategoricalTickFormatter"},{"attributes":{},"id":"9a5bca26-5701-470d-88e1-729648918c29","type":"ToolEvents"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"b233f8ab-5ba8-4324-a0e6-d1d6f87a4254","type":"BasicTickFormatter"},"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"},"ticker":{"id":"94ef2ab9-4ff3-46b0-b72c-ebc8fc5ea4b4","type":"BasicTicker"}},"id":"de08b3d7-421b-47be-95ec-9bbf53f9b477","type":"LinearAxis"},{"attributes":{"plot":null,"text":"American Airlines "},"id":"d218a2f7-e0b8-4014-b733-7b95eb8fd8cd","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"43eb8644-2205-490d-9e3a-e640952a6d91","type":"PanTool"},{"id":"5f93c7b8-8e1b-437a-a9b3-cd61dd7bea25","type":"WheelZoomTool"},{"id":"672b5e97-b6ad-4a66-a9bd-67d47fd25099","type":"BoxZoomTool"},{"id":"1dd1b961-cb55-4047-a2df-f2ab66f34f9a","type":"SaveTool"},{"id":"ff1d348f-7430-46e2-8b9f-66ae28122b70","type":"ResetTool"},{"id":"662f82de-b0ff-4f61-8eef-3030f184e4d2","type":"HelpTool"}]},"id":"f12e69c3-fe73-4fb3-b2d7-23f13d642106","type":"Toolbar"},{"attributes":{"child":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"1052a03d-4c76-456a-ab2f-ba9b41b50b10","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15.1, 16.3]"],"chart_index":[{"POS_ARR_DELAY":"(15.1, 16.3]"}],"values":[15.5],"x":[18],"y":["Saturday"]}},"id":"fe5e1810-0a97-4bf9-8e51-a91aee150739","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad1a01c3-36ee-4f91-8fcb-df4c82dea8af","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"66d2fb87-de36-46a6-aae3-8525ec12c778","type":"Rect"},{"attributes":{},"id":"8e581fdb-adf3-4121-8915-9b559f9c0878","type":"ToolEvents"},{"attributes":{"data_source":{"id":"b23c68fc-fe1f-4e22-a3c8-19f58ffad371","type":"ColumnDataSource"},"glyph":{"id":"b8edee29-70a2-4cf4-a366-4ac750a8161e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"07aa4fa2-22c1-49ff-b93b-465b0c009113","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8, 10]"],"chart_index":[{"POS_ARR_DELAY":"(8, 10]"}],"values":[10.0],"x":[14],"y":["Saturday"]}},"id":"e346f844-84ec-4601-ad26-e0ba044b2a63","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"US Airways "},"id":"c2bfe564-f218-4236-ab1d-a5e4818491ad","type":"Title"},{"attributes":{},"id":"f775d39d-a2f7-4bfb-b769-681677263bfd","type":"BasicTickFormatter"},{"attributes":{},"id":"d55bc7ca-580a-43d1-ade0-783fbffff5c5","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"70de4bff-a947-4115-ab19-61042cecc91a","type":"BoxAnnotation"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"d55bc7ca-580a-43d1-ade0-783fbffff5c5","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"},"ticker":{"id":"0566a013-9d04-47e3-9683-50a0ede036ed","type":"CategoricalTicker"}},"id":"911ca942-32ee-4444-8a07-a3cff8d9596a","type":"CategoricalAxis"},{"attributes":{"color_mapper":{"id":"c269a568-e4b6-4aa3-8f31-c4b0f191e2e2","type":"LinearColorMapper"},"formatter":{"id":"f775d39d-a2f7-4bfb-b769-681677263bfd","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"},"ticker":{"id":"c20a4ebf-7576-414a-9510-4d0755e5f42d","type":"BasicTicker"}},"id":"beaabd13-d86f-4ba4-8f16-0ea63b9613a1","type":"ColorBar"},{"attributes":{"data_source":{"id":"2416db43-7c00-4a3d-b71b-d688df8cae09","type":"ColumnDataSource"},"glyph":{"id":"ee2ca39f-5d96-47ae-9515-4c40b1b231ac","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b05c5916-fe86-4f67-8e12-0c18c95966e6","type":"GlyphRenderer"},{"attributes":{},"id":"94b3880b-f9d3-432c-9b49-b09fde1b4d82","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.4, 10.5]"],"chart_index":[{"POS_ARR_DELAY":"(9.4, 10.5]"}],"values":[10.0],"x":[14],"y":["Saturday"]}},"id":"326aaeec-5241-4c15-a885-a67f1298a154","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 12]"],"chart_index":[{"POS_ARR_DELAY":"(10, 12]"}],"values":[11.256880733944953],"x":[18],"y":["Monday"]}},"id":"cee4da05-f7c3-4129-80a0-da372a898650","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5d706bd4-fa6c-4412-9fbb-ee66aa0fdd33","type":"FactorRange"},{"attributes":{},"id":"e74d2974-066e-4d1e-aa7d-9b896b36196a","type":"CategoricalTicker"},{"attributes":{},"id":"c03970c0-e2fa-4275-99a7-5195d4359ca0","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"9bef180d-539d-4018-b1cb-4990cbe5ea73","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"275e314d-e0f9-49c9-bbba-fbecefda8c36","type":"Rect"},{"attributes":{"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"}},"id":"9ce789d1-afda-4285-ace9-72795803cc7f","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[7.06, 8.2]"],"chart_index":[{"POS_ARR_DELAY":"[7.06, 8.2]"}],"values":[7.068965517241379],"x":[18],"y":["Friday"]}},"id":"59031c08-c49a-421f-8d18-baada0eb95eb","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5434caf-b930-4bf2-9766-e966f5e9cb4f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16, 18]","(16, 18]"],"chart_index":[{"POS_ARR_DELAY":"(16, 18]"},{"POS_ARR_DELAY":"(16, 18]"}],"values":[16.062937062937063,18.0],"x":[18,16],"y":["Thursday","Friday"]}},"id":"ff0dddc2-6f9d-410c-8ac5-0335d3e4f131","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"}},"id":"662f82de-b0ff-4f61-8eef-3030f184e4d2","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14, 16]","(14, 16]","(14, 16]"],"chart_index":[{"POS_ARR_DELAY":"(14, 16]"},{"POS_ARR_DELAY":"(14, 16]"},{"POS_ARR_DELAY":"(14, 16]"}],"values":[14.333333333333334,15.280898876404494,14.54],"x":[18,18,18],"y":["Wednesday","Friday","Saturday"]}},"id":"aa508f66-47e3-4a1a-9349-5ffa80ff85fb","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8edee29-70a2-4cf4-a366-4ac750a8161e","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"930213d3-3274-4710-976b-4028734a6d14","type":"Rect"},{"attributes":{"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"}},"id":"5f93c7b8-8e1b-437a-a9b3-cd61dd7bea25","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14, 16]","(14, 16]","(14, 16]"],"chart_index":[{"POS_ARR_DELAY":"(14, 16]"},{"POS_ARR_DELAY":"(14, 16]"},{"POS_ARR_DELAY":"(14, 16]"}],"values":[14.679487179487179,14.978260869565217,14.187919463087248],"x":[18,18,18],"y":["Tuesday","Saturday","Sunday"]}},"id":"2416db43-7c00-4a3d-b71b-d688df8cae09","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a46346fd-a919-44ea-9610-291cdfe2b1b9","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14, 15.1]"],"chart_index":[{"POS_ARR_DELAY":"(14, 15.1]"}],"values":[15.017857142857142],"x":[18],"y":["Thursday"]}},"id":"5a351830-dac2-4fe0-b7f3-88306f0c19ba","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.02, 2]","[-0.02, 2]","[-0.02, 2]","[-0.02, 2]"],"chart_index":[{"POS_ARR_DELAY":"[-0.02, 2]"},{"POS_ARR_DELAY":"[-0.02, 2]"},{"POS_ARR_DELAY":"[-0.02, 2]"},{"POS_ARR_DELAY":"[-0.02, 2]"}],"values":[0.0,0.0,0.0,0.0],"x":[22,19,19,17],"y":["Monday","Wednesday","Thursday","Saturday"]}},"id":"6c1b99e3-03db-4914-958c-bf1a1cc27b27","type":"ColumnDataSource"},{"attributes":{},"id":"bf5e8748-f412-4d58-a1e5-a0e0e95b0348","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"b56faccb-242a-4485-8c50-6869d386b577","type":"Range1d"},{"attributes":{},"id":"ddeaa518-d723-49f8-9d84-f86c7fe924a6","type":"ToolEvents"},{"attributes":{},"id":"94ef2ab9-4ff3-46b0-b72c-ebc8fc5ea4b4","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.2, 9.4]"],"chart_index":[{"POS_ARR_DELAY":"(8.2, 9.4]"}],"values":[9.10344827586207],"x":[18],"y":["Sunday"]}},"id":"bc647a8f-9102-490c-a514-65e41b791d2b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.8, 14]"],"chart_index":[{"POS_ARR_DELAY":"(12.8, 14]"}],"values":[13.391304347826088],"x":[18],"y":["Monday"]}},"id":"33f30ac9-2949-427b-8d6e-bed9933e0818","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"54bfd8c0-342e-4bb8-8a13-025ab60e45cc","type":"LinearColorMapper"},"formatter":{"id":"d4d561ca-639b-47f6-900d-245d9baf1242","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"},"ticker":{"id":"3cb12e64-467b-42a5-ab56-ae0960c41060","type":"BasicTicker"}},"id":"9c98ae0f-a380-4356-97e7-d64ac32b85bb","type":"ColorBar"},{"attributes":{"data_source":{"id":"bc647a8f-9102-490c-a514-65e41b791d2b","type":"ColumnDataSource"},"glyph":{"id":"b5434caf-b930-4bf2-9766-e966f5e9cb4f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5767e3d1-70e9-4b32-a745-fb53da7fc261","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"56fb314b-c790-4509-8d8a-3d7a7ee01509","type":"LinearColorMapper"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"de08b3d7-421b-47be-95ec-9bbf53f9b477","type":"LinearAxis"}],"left":[{"id":"8e328d43-7eed-4d07-b7e9-e4859cf9e645","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"193875e8-5b31-4a03-b86d-426023d19d08","type":"BoxAnnotation"},{"id":"a422fff5-e8bf-4bc6-8e6c-12315cce1657","type":"GlyphRenderer"},{"id":"b05c5916-fe86-4f67-8e12-0c18c95966e6","type":"GlyphRenderer"},{"id":"dff6401f-7cec-49a7-9306-9e8d8c7587e7","type":"GlyphRenderer"},{"id":"cbb4fed8-400d-4812-ad71-20afa31bd5ac","type":"GlyphRenderer"},{"id":"2ac5d9a6-f212-4595-9d15-e2f284e42637","type":"GlyphRenderer"},{"id":"f717aa03-fb26-4037-953d-604323bb5796","type":"GlyphRenderer"},{"id":"de08b3d7-421b-47be-95ec-9bbf53f9b477","type":"LinearAxis"},{"id":"8e328d43-7eed-4d07-b7e9-e4859cf9e645","type":"CategoricalAxis"},{"id":"beaabd13-d86f-4ba4-8f16-0ea63b9613a1","type":"ColorBar"}],"right":[{"id":"beaabd13-d86f-4ba4-8f16-0ea63b9613a1","type":"ColorBar"}],"title":{"id":"0ad15051-18da-4e77-aa0f-fa45a91fc7f2","type":"Title"},"tool_events":{"id":"9a5bca26-5701-470d-88e1-729648918c29","type":"ToolEvents"},"toolbar":{"id":"a70b0281-9837-486b-99f3-b688569bcc51","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b56faccb-242a-4485-8c50-6869d386b577","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a46346fd-a919-44ea-9610-291cdfe2b1b9","type":"FactorRange"}},"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f3bb9a6-5eab-4f52-990d-1d583d15f099","type":"Rect"},{"attributes":{},"id":"9e5663a6-3c2d-40a0-9094-155d5eb64201","type":"BasicTicker"},{"attributes":{"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"}},"id":"04b3a6b0-38d7-486b-8a80-415e16077b32","type":"WheelZoomTool"},{"attributes":{"child":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"},"title":"US"},"id":"51502b69-9f21-4f41-a43d-5f2cc0e65051","type":"Panel"},{"attributes":{"data_source":{"id":"59031c08-c49a-421f-8d18-baada0eb95eb","type":"ColumnDataSource"},"glyph":{"id":"e4d7dd54-fd61-41e3-8513-a9081a92ac4b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5b1787b2-d7a9-494f-b542-3cd071707698","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"193875e8-5b31-4a03-b86d-426023d19d08","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"18e6e846-c84f-4dd9-bf92-b9456c7491b8","type":"Rect"},{"attributes":{"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"}},"id":"ff1d348f-7430-46e2-8b9f-66ae28122b70","type":"ResetTool"},{"attributes":{"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"}},"id":"13b2d312-cce7-44f5-98e2-35d7c73ea4e8","type":"HelpTool"},{"attributes":{"data_source":{"id":"5a351830-dac2-4fe0-b7f3-88306f0c19ba","type":"ColumnDataSource"},"glyph":{"id":"154929ff-204b-4fc1-9c8a-e1692a5a1dde","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8b815f3b-5eb4-43dd-b8da-24b82509ff08","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"}},"id":"c4a30e2c-e730-4610-8c2e-75ecfe73ee5b","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1171a27e-4ed5-484f-869a-f9bde9768844","type":"Rect"},{"attributes":{"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"}},"id":"5a05a0c8-8f5e-48e8-9574-604e98e0031a","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3efda0b-f9b6-4b28-b572-f19ccde2c5ce","type":"Rect"},{"attributes":{},"id":"b233f8ab-5ba8-4324-a0e6-d1d6f87a4254","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12, 14]","(12, 14]"],"chart_index":[{"POS_ARR_DELAY":"(12, 14]"},{"POS_ARR_DELAY":"(12, 14]"}],"values":[12.954545454545455,12.040816326530612],"x":[18,18],"y":["Wednesday","Friday"]}},"id":"d3a49637-abd7-4866-b9c6-fb6839c47b58","type":"ColumnDataSource"},{"attributes":{},"id":"4c079fb0-c65b-44bb-94de-6f86b9d4a149","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"42ce2059-d942-4abb-9a80-88198140bee2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"},"ticker":{"id":"e74d2974-066e-4d1e-aa7d-9b896b36196a","type":"CategoricalTicker"}},"id":"d4ea6ee1-e68f-458f-b5b4-205aa0b8ae02","type":"CategoricalAxis"},{"attributes":{},"id":"c20a4ebf-7576-414a-9510-4d0755e5f42d","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4c079fb0-c65b-44bb-94de-6f86b9d4a149","type":"BasicTickFormatter"},"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"},"ticker":{"id":"27f74915-c9a5-428b-b180-c5e03282aa8c","type":"BasicTicker"}},"id":"fdff8254-7d2f-4fff-9b0c-bb22331f6cee","type":"LinearAxis"},{"attributes":{"child":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"},"title":"AA"},"id":"64b831b4-50e0-431a-b7b5-da0e47989eeb","type":"Panel"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"fdff8254-7d2f-4fff-9b0c-bb22331f6cee","type":"LinearAxis"}],"left":[{"id":"911ca942-32ee-4444-8a07-a3cff8d9596a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"70de4bff-a947-4115-ab19-61042cecc91a","type":"BoxAnnotation"},{"id":"87c29d16-094c-4728-8930-f8c6aa63315f","type":"GlyphRenderer"},{"id":"e7dc8556-e53d-4ebf-a874-952cdad7b711","type":"GlyphRenderer"},{"id":"d31c9657-5f67-4652-9c67-2cf399be34c1","type":"GlyphRenderer"},{"id":"07aa4fa2-22c1-49ff-b93b-465b0c009113","type":"GlyphRenderer"},{"id":"813d5e18-aa78-481a-bf09-44a4319b664a","type":"GlyphRenderer"},{"id":"fdff8254-7d2f-4fff-9b0c-bb22331f6cee","type":"LinearAxis"},{"id":"911ca942-32ee-4444-8a07-a3cff8d9596a","type":"CategoricalAxis"},{"id":"9c98ae0f-a380-4356-97e7-d64ac32b85bb","type":"ColorBar"}],"right":[{"id":"9c98ae0f-a380-4356-97e7-d64ac32b85bb","type":"ColorBar"}],"title":{"id":"c2bfe564-f218-4236-ab1d-a5e4818491ad","type":"Title"},"tool_events":{"id":"8e581fdb-adf3-4121-8915-9b559f9c0878","type":"ToolEvents"},"toolbar":{"id":"f12e69c3-fe73-4fb3-b2d7-23f13d642106","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9bef180d-539d-4018-b1cb-4990cbe5ea73","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"652f7303-3140-4791-a18b-0fd3c224582f","type":"FactorRange"}},"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.3, 17.4]"],"chart_index":[{"POS_ARR_DELAY":"(16.3, 17.4]"}],"values":[17.435897435897434],"x":[18],"y":["Tuesday"]}},"id":"2b071e1b-23bd-44b0-a260-0ef804240068","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"0ad15051-18da-4e77-aa0f-fa45a91fc7f2","type":"Title"},{"attributes":{"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"}},"id":"11226878-fe1f-4e4e-945d-b3eb73b69c73","type":"HelpTool"},{"attributes":{"data_source":{"id":"2ddb2ff8-d2ce-4ae0-a77c-c7d8f618e354","type":"ColumnDataSource"},"glyph":{"id":"275e314d-e0f9-49c9-bbba-fbecefda8c36","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d31c9657-5f67-4652-9c67-2cf399be34c1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 12]"],"chart_index":[{"POS_ARR_DELAY":"(10, 12]"}],"values":[11.923076923076923],"x":[18],"y":["Tuesday"]}},"id":"2ddb2ff8-d2ce-4ae0-a77c-c7d8f618e354","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"32080c52-ff8f-467c-8455-fdda6e25441b","subtype":"Chart","type":"Plot"}},"id":"1dd1b961-cb55-4047-a2df-f2ab66f34f9a","type":"SaveTool"},{"attributes":{"data_source":{"id":"326aaeec-5241-4c15-a885-a67f1298a154","type":"ColumnDataSource"},"glyph":{"id":"28ebdd4d-1f2a-450f-9efb-ef533782a19d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1c2c5912-2ce0-4517-9c59-5862aa54ad5d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2d6d42cb-b0e3-4ec7-b8cd-f0b2566c57c8","subtype":"Chart","type":"Plot"}},"id":"f4cd03f4-214b-4ca3-863d-212f0f433358","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c4a30e2c-e730-4610-8c2e-75ecfe73ee5b","type":"PanTool"},{"id":"04b3a6b0-38d7-486b-8a80-415e16077b32","type":"WheelZoomTool"},{"id":"9af36bd6-dd55-4ef9-aff8-df85bd224c89","type":"BoxZoomTool"},{"id":"ddec4fbd-3901-453c-80cb-a7483d1892b4","type":"SaveTool"},{"id":"5a05a0c8-8f5e-48e8-9574-604e98e0031a","type":"ResetTool"},{"id":"11226878-fe1f-4e4e-945d-b3eb73b69c73","type":"HelpTool"}]},"id":"43403ee8-7614-44db-a964-f902ce7ba89a","type":"Toolbar"},{"attributes":{"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"}},"id":"ddec4fbd-3901-453c-80cb-a7483d1892b4","type":"SaveTool"},{"attributes":{"color_mapper":{"id":"56fb314b-c790-4509-8d8a-3d7a7ee01509","type":"LinearColorMapper"},"formatter":{"id":"bf5e8748-f412-4d58-a1e5-a0e0e95b0348","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"2a5855a9-9e69-455d-b86a-da7bb426de39","subtype":"Chart","type":"Plot"},"ticker":{"id":"9e5663a6-3c2d-40a0-9094-155d5eb64201","type":"BasicTicker"}},"id":"1e270468-2d15-4a7f-a2e3-1a9d87b58ee5","type":"ColorBar"},{"attributes":{},"id":"3cb12e64-467b-42a5-ab56-ae0960c41060","type":"BasicTicker"}],"root_ids":["ea5c66f0-a248-4d55-90e8-59a81c198e40"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"c0ffe46e-98b2-4a0d-8835-98f831708b9c","elementid":"c92ed5e5-4383-4f64-b563-5f5683bf174b","modelid":"ea5c66f0-a248-4d55-90e8-59a81c198e40"}];
                  
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