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
      };var element = document.getElementById("ee8ea66a-6ef0-4e78-8605-48401b585604");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee8ea66a-6ef0-4e78-8605-48401b585604' but no matching script tag was found. ")
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
                  var docs_json = {"57fce729-ba5a-4416-aec0-1d20961fc123":{"roots":{"references":[{"attributes":{"data_source":{"id":"dd18fbb1-3347-462b-b1ab-2f607f29cea1","type":"ColumnDataSource"},"glyph":{"id":"8507c528-001b-4121-a841-3599b166e94d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"302fd930-0940-4f4b-bf29-e44e7e3ce70c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8b0fa395-e957-4c4a-bea0-6bbc6e8c33ff","type":"ColumnDataSource"},"glyph":{"id":"c495bfe0-5b3f-4f90-9097-bd12a8def48a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6e80e26a-4990-4193-bf87-ba002ada5596","type":"GlyphRenderer"},{"attributes":{},"id":"ff2d7661-14ee-48c6-8dfe-4a80554b462c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"42836b4e-1012-4012-92c1-b392a1b8085c","type":"BoxAnnotation"},"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"}},"id":"584390fd-2e73-4d1c-b201-e4e40772db85","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1bea5ff9-d5f9-49ef-92bc-1e55f4b6ffcc","type":"ColumnDataSource"},"glyph":{"id":"add51866-6ce5-4307-a7ab-c60239d8b5a0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3f86b29f-3f27-4002-80a5-25019cec1727","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"}},"id":"111a1652-492c-456b-8568-b137b4390c01","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"90481eed-1297-4312-82d3-cccf59e3bc18","type":"Rect"},{"attributes":{"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"}},"id":"859c0e34-f419-44e1-9b92-73700d974252","type":"PanTool"},{"attributes":{"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"}},"id":"93b70055-dc9c-4737-8bb2-f70407fa3133","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"776a3a31-1f67-47c8-8f45-5c6596985859","type":"Rect"},{"attributes":{},"id":"1f6d6469-95a9-4735-ab5e-3e9e42801ba3","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf11c3f7-b061-48e6-9ac6-059c2604c9b1","type":"Rect"},{"attributes":{},"id":"d80c6dcc-cca9-4baf-8bf0-19f377103c21","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9e9c6603-4149-4e40-bc4c-9fe19809f622","type":"ColumnDataSource"},"glyph":{"id":"bc4f58e3-285f-495a-8e1b-0c91da1b00cb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0df57762-f189-4cd8-b030-a038788adbfd","type":"GlyphRenderer"},{"attributes":{},"id":"a9aedef8-5379-46e6-b1e7-89689ce4b5c1","type":"ToolEvents"},{"attributes":{"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"}},"id":"d8e73d8c-c0fa-4688-b8f9-b5ed77ca5009","type":"SaveTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"3fd7d1a4-fd6d-4bff-b9f2-4b4b96f6ed42","type":"Title"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"0813f6df-1d28-483d-9584-40974a026a37","type":"BasicTickFormatter"},"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"},"ticker":{"id":"7abb4288-c6b5-493c-899d-416b94ff6b01","type":"BasicTicker"}},"id":"e7e616fb-644a-45bf-b4f4-7cbcae0d972f","type":"LinearAxis"},{"attributes":{"child":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"032a5dc3-909d-4c2e-8e10-5c42c2b9bd96","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"02fa00e8-6855-44e0-918e-ace7a2b25bac","type":"LinearColorMapper"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"d8771a9b-083b-4236-aab7-a2fa8f61a8f6","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"},"ticker":{"id":"2cb54b00-0fe0-4040-bade-1d0b8610af42","type":"CategoricalTicker"}},"id":"34149854-8902-47dd-a3ce-132a917e435e","type":"CategoricalAxis"},{"attributes":{},"id":"d8771a9b-083b-4236-aab7-a2fa8f61a8f6","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"569eae2d-7416-4524-86ce-1225291465a3","type":"FactorRange"},{"attributes":{},"id":"6e1c8dfc-b8c5-4060-bbcc-d860c2e02eca","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.5, 15.7]"],"chart_index":[{"POS_ARR_DELAY":"(12.5, 15.7]"}],"values":[15.107142857142858],"x":[20],"y":["Friday"]}},"id":"be812615-a17e-466a-9fcd-8aa62285a9a5","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8507c528-001b-4121-a841-3599b166e94d","type":"Rect"},{"attributes":{"data_source":{"id":"f0bb7c0a-bcc7-4406-b0c7-1af25449002d","type":"ColumnDataSource"},"glyph":{"id":"d37f5a50-22de-475e-9920-62953343b225","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef09ed61-5d55-4bc2-a888-d15066d6832f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc4f58e3-285f-495a-8e1b-0c91da1b00cb","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.5, 15.7]"],"chart_index":[{"POS_ARR_DELAY":"(12.5, 15.7]"}],"values":[15.107142857142858],"x":[20],"y":["Friday"]}},"id":"2e853c1f-65ab-4182-82eb-51f525e1a04f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e4cbb72f-35b1-4f39-bf34-f14fd9c648f5","type":"ColumnDataSource"},"glyph":{"id":"5181f284-7c9c-4d12-825f-20f154deacc4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"091dc125-60d5-4d81-aa11-8d13067803bd","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"93b70055-dc9c-4737-8bb2-f70407fa3133","type":"PanTool"},{"id":"111a1652-492c-456b-8568-b137b4390c01","type":"WheelZoomTool"},{"id":"584390fd-2e73-4d1c-b201-e4e40772db85","type":"BoxZoomTool"},{"id":"6debed4c-480d-4b60-b129-cdbf42453982","type":"SaveTool"},{"id":"e5c3abe8-49c2-46fd-b41c-ad1938ab2cd2","type":"ResetTool"},{"id":"e52aaca8-64c0-466d-a621-e2da4426c4ad","type":"HelpTool"}]},"id":"0bb83fe8-2c69-4bbd-89f2-bfc0eddcd710","type":"Toolbar"},{"attributes":{"data_source":{"id":"70337ad1-2b91-4921-9385-05319360b868","type":"ColumnDataSource"},"glyph":{"id":"d44324bb-50e1-439b-b8e0-380a4d4c5705","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6df0cc69-89a6-477f-9501-fcfe22908b83","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"}},"id":"32e3fc8d-8487-4bd4-8e1a-111c8c7580b2","type":"HelpTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e7e616fb-644a-45bf-b4f4-7cbcae0d972f","type":"LinearAxis"}],"left":[{"id":"385aced4-6880-4604-873d-ebd45a89ec30","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"42836b4e-1012-4012-92c1-b392a1b8085c","type":"BoxAnnotation"},{"id":"091dc125-60d5-4d81-aa11-8d13067803bd","type":"GlyphRenderer"},{"id":"6e80e26a-4990-4193-bf87-ba002ada5596","type":"GlyphRenderer"},{"id":"0df57762-f189-4cd8-b030-a038788adbfd","type":"GlyphRenderer"},{"id":"175bc368-96b1-4f11-8c91-bdd59cdf2fc6","type":"GlyphRenderer"},{"id":"6df0cc69-89a6-477f-9501-fcfe22908b83","type":"GlyphRenderer"},{"id":"141b97d2-41aa-4ca7-8330-08794af9ab69","type":"GlyphRenderer"},{"id":"e02db987-4b6c-4c02-9c33-76a83206c121","type":"GlyphRenderer"},{"id":"302fd930-0940-4f4b-bf29-e44e7e3ce70c","type":"GlyphRenderer"},{"id":"e7e616fb-644a-45bf-b4f4-7cbcae0d972f","type":"LinearAxis"},{"id":"385aced4-6880-4604-873d-ebd45a89ec30","type":"CategoricalAxis"},{"id":"78b547a7-9ec9-4902-9961-062929f59324","type":"ColorBar"}],"right":[{"id":"78b547a7-9ec9-4902-9961-062929f59324","type":"ColorBar"}],"title":{"id":"4ec0d22e-d62c-4c29-9e94-c1aff28895fa","type":"Title"},"tool_events":{"id":"d3c7cfcc-53c8-4482-8cb9-1a9036501ead","type":"ToolEvents"},"toolbar":{"id":"0bb83fe8-2c69-4bbd-89f2-bfc0eddcd710","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"93539650-61b4-44ed-a050-94024ba3492d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ee4bd4a1-2375-42bf-a256-61b869dd16f1","type":"FactorRange"}},"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"cb667ef8-5e89-4dbd-b654-ca48db4fadbf","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"2e853c1f-65ab-4182-82eb-51f525e1a04f","type":"ColumnDataSource"},"glyph":{"id":"cf11c3f7-b061-48e6-9ac6-059c2604c9b1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3bc1f3c4-4aa1-48ec-a11a-a1e640819e73","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5b61a52b-f5df-4f2a-bdc8-f89e51f5071c","type":"ColumnDataSource"},"glyph":{"id":"ffa63453-15a5-44f7-ad91-b09fc0e3e354","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"debb49e4-a3d1-46ab-aac4-f603b05c4550","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1e25372d-0f9d-4b43-b103-2d994a24434e","type":"BoxAnnotation"},"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"}},"id":"21cc54b5-0ef8-4529-bced-de95d1567eab","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"cb667ef8-5e89-4dbd-b654-ca48db4fadbf","type":"LinearColorMapper"},"formatter":{"id":"6e1c8dfc-b8c5-4060-bbcc-d860c2e02eca","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"},"ticker":{"id":"d80c6dcc-cca9-4baf-8bf0-19f377103c21","type":"BasicTicker"}},"id":"0050d518-f813-4d55-83c2-c877ef3370cb","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d44324bb-50e1-439b-b8e0-380a4d4c5705","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"fc9ca99f-1794-44a5-9971-728f9d372728","type":"BasicTickFormatter"},"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"},"ticker":{"id":"ff2d7661-14ee-48c6-8dfe-4a80554b462c","type":"BasicTicker"}},"id":"fbb8fa33-2c55-44a8-934c-a7a2ea695562","type":"LinearAxis"},{"attributes":{},"id":"0813f6df-1d28-483d-9584-40974a026a37","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5181f284-7c9c-4d12-825f-20f154deacc4","type":"Rect"},{"attributes":{},"id":"2cb54b00-0fe0-4040-bade-1d0b8610af42","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"975fa864-c861-42b9-bd32-c1bb8556dcc5","type":"Rect"},{"attributes":{},"id":"7ccde18d-bbd0-45da-8538-e29153ce83d8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.9, 25.07]"],"chart_index":[{"POS_ARR_DELAY":"(21.9, 25.07]"}],"values":[24.17948717948718],"x":[20],"y":["Tuesday"]}},"id":"2ab80678-4329-4977-92c6-d367acdfd740","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"42836b4e-1012-4012-92c1-b392a1b8085c","type":"BoxAnnotation"},{"attributes":{"child":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"688bac29-f301-4757-8f7e-d13f933cc766","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.1, 6.3]","(3.1, 6.3]","(3.1, 6.3]","(3.1, 6.3]","(3.1, 6.3]"],"chart_index":[{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"}],"values":[4.857142857142857,6.0,5.653061224489796,4.4,4.3],"x":[19,15,20,15,8],"y":["Tuesday","Wednesday","Wednesday","Thursday","Friday"]}},"id":"ce62008d-65a4-42a2-9792-a0fdf0f371c2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fa980edd-7052-4bbb-8268-f01b043b50cc","type":"ColumnDataSource"},"glyph":{"id":"3a06332e-c443-49f1-8ebe-87213b09f25f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e02db987-4b6c-4c02-9c33-76a83206c121","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"93539650-61b4-44ed-a050-94024ba3492d","type":"Range1d"},{"attributes":{"data_source":{"id":"be812615-a17e-466a-9fcd-8aa62285a9a5","type":"ColumnDataSource"},"glyph":{"id":"975fa864-c861-42b9-bd32-c1bb8556dcc5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"175bc368-96b1-4f11-8c91-bdd59cdf2fc6","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"02fa00e8-6855-44e0-918e-ace7a2b25bac","type":"LinearColorMapper"},"formatter":{"id":"7ccde18d-bbd0-45da-8538-e29153ce83d8","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f6d6469-95a9-4735-ab5e-3e9e42801ba3","type":"BasicTicker"}},"id":"78b547a7-9ec9-4902-9961-062929f59324","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(25.07, 28.2]"],"chart_index":[{"POS_ARR_DELAY":"(25.07, 28.2]"}],"values":[28.205128205128204],"x":[19],"y":["Monday"]}},"id":"e4cbb72f-35b1-4f39-bf34-f14fd9c648f5","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a06332e-c443-49f1-8ebe-87213b09f25f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15.7, 18.8]"],"chart_index":[{"POS_ARR_DELAY":"(15.7, 18.8]"}],"values":[17.6],"x":[19],"y":["Saturday"]}},"id":"934879dd-4eb2-4202-8b8e-1104d9402261","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"fbb8fa33-2c55-44a8-934c-a7a2ea695562","type":"LinearAxis"}],"left":[{"id":"34149854-8902-47dd-a3ce-132a917e435e","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"1e25372d-0f9d-4b43-b103-2d994a24434e","type":"BoxAnnotation"},{"id":"ef09ed61-5d55-4bc2-a888-d15066d6832f","type":"GlyphRenderer"},{"id":"21c42e7d-fecd-4d33-98f9-ed1530d6b5c0","type":"GlyphRenderer"},{"id":"477831a6-05f4-492d-aed6-4ffaf20f2bff","type":"GlyphRenderer"},{"id":"3bc1f3c4-4aa1-48ec-a11a-a1e640819e73","type":"GlyphRenderer"},{"id":"e3f59e8d-ac06-4105-89bf-e618c9e30515","type":"GlyphRenderer"},{"id":"debb49e4-a3d1-46ab-aac4-f603b05c4550","type":"GlyphRenderer"},{"id":"3cfc6b46-9c14-45dd-ae92-9026be8bad5d","type":"GlyphRenderer"},{"id":"3f86b29f-3f27-4002-80a5-25019cec1727","type":"GlyphRenderer"},{"id":"fbb8fa33-2c55-44a8-934c-a7a2ea695562","type":"LinearAxis"},{"id":"34149854-8902-47dd-a3ce-132a917e435e","type":"CategoricalAxis"},{"id":"0050d518-f813-4d55-83c2-c877ef3370cb","type":"ColorBar"}],"right":[{"id":"0050d518-f813-4d55-83c2-c877ef3370cb","type":"ColorBar"}],"title":{"id":"3fd7d1a4-fd6d-4bff-b9f2-4b4b96f6ed42","type":"Title"},"tool_events":{"id":"a9aedef8-5379-46e6-b1e7-89689ce4b5c1","type":"ToolEvents"},"toolbar":{"id":"f4eddad2-f7b3-4058-9c7a-e453af01fe40","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"599eb7b0-9d31-49d6-a2d7-60d885c8f9b9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"569eae2d-7416-4524-86ce-1225291465a3","type":"FactorRange"}},"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffa63453-15a5-44f7-ad91-b09fc0e3e354","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(21.9, 25.07]"],"chart_index":[{"POS_ARR_DELAY":"(21.9, 25.07]"}],"values":[24.17948717948718],"x":[20],"y":["Tuesday"]}},"id":"8b0fa395-e957-4c4a-bea0-6bbc6e8c33ff","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ce62008d-65a4-42a2-9792-a0fdf0f371c2","type":"ColumnDataSource"},"glyph":{"id":"90481eed-1297-4312-82d3-cccf59e3bc18","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3cfc6b46-9c14-45dd-ae92-9026be8bad5d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"934879dd-4eb2-4202-8b8e-1104d9402261","type":"ColumnDataSource"},"glyph":{"id":"369203f2-a431-4961-acb0-25e362d637e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"477831a6-05f4-492d-aed6-4ffaf20f2bff","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.1]","[-0.03, 3.1]","[-0.03, 3.1]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.1]"},{"POS_ARR_DELAY":"[-0.03, 3.1]"},{"POS_ARR_DELAY":"[-0.03, 3.1]"}],"values":[0.6,0.0,1.5555555555555556],"x":[8,15,8],"y":["Wednesday","Friday","Saturday"]}},"id":"1bea5ff9-d5f9-49ef-92bc-1e55f4b6ffcc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"}},"id":"10da927b-a745-4742-b97c-a23c5f41a0b4","type":"ResetTool"},{"attributes":{"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"}},"id":"e52aaca8-64c0-466d-a621-e2da4426c4ad","type":"HelpTool"},{"attributes":{"callback":null,"end":23},"id":"599eb7b0-9d31-49d6-a2d7-60d885c8f9b9","type":"Range1d"},{"attributes":{"data_source":{"id":"8b41eb6d-1618-40d9-9381-7b9b5f925e94","type":"ColumnDataSource"},"glyph":{"id":"650925fb-14eb-40bf-9f5d-63f024a3fae0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"141b97d2-41aa-4ca7-8330-08794af9ab69","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.4, 12.5]","(9.4, 12.5]","(9.4, 12.5]","(9.4, 12.5]","(9.4, 12.5]"],"chart_index":[{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"}],"values":[11.79245283018868,10.9,10.020408163265307,10.710144927536232,11.273972602739725],"x":[20,8,19,19,19],"y":["Monday","Tuesday","Wednesday","Thursday","Sunday"]}},"id":"a3b4335f-86f5-42b5-be90-133fa6e68e2c","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"ee4bd4a1-2375-42bf-a256-61b869dd16f1","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"add51866-6ce5-4307-a7ab-c60239d8b5a0","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d37f5a50-22de-475e-9920-62953343b225","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]"],"chart_index":[{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"}],"values":[7.8,7.363636363636363,6.277777777777778,8.422535211267606,8.323529411764707,8.5,7.711538461538462],"x":[8,8,20,19,20,8,20],"y":["Monday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"8b41eb6d-1618-40d9-9381-7b9b5f925e94","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a3b4335f-86f5-42b5-be90-133fa6e68e2c","type":"ColumnDataSource"},"glyph":{"id":"776a3a31-1f67-47c8-8f45-5c6596985859","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e3f59e8d-ac06-4105-89bf-e618c9e30515","type":"GlyphRenderer"},{"attributes":{},"id":"fc9ca99f-1794-44a5-9971-728f9d372728","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"369203f2-a431-4961-acb0-25e362d637e4","type":"Rect"},{"attributes":{},"id":"5fa4e56f-f2c9-4683-a20c-ab3ff117d422","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.1, 6.3]","(3.1, 6.3]","(3.1, 6.3]","(3.1, 6.3]","(3.1, 6.3]"],"chart_index":[{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"},{"POS_ARR_DELAY":"(3.1, 6.3]"}],"values":[4.857142857142857,6.0,5.653061224489796,4.4,4.3],"x":[19,15,20,15,8],"y":["Tuesday","Wednesday","Wednesday","Thursday","Friday"]}},"id":"fa980edd-7052-4bbb-8268-f01b043b50cc","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d321b4d-25a8-49d5-8a61-858de4176b1e","type":"Rect"},{"attributes":{},"id":"d3c7cfcc-53c8-4482-8cb9-1a9036501ead","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(25.07, 28.2]"],"chart_index":[{"POS_ARR_DELAY":"(25.07, 28.2]"}],"values":[28.205128205128204],"x":[19],"y":["Monday"]}},"id":"f0bb7c0a-bcc7-4406-b0c7-1af25449002d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"}},"id":"e5c3abe8-49c2-46fd-b41c-ad1938ab2cd2","type":"ResetTool"},{"attributes":{},"id":"7abb4288-c6b5-493c-899d-416b94ff6b01","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2ab80678-4329-4977-92c6-d367acdfd740","type":"ColumnDataSource"},"glyph":{"id":"1d321b4d-25a8-49d5-8a61-858de4176b1e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"21c42e7d-fecd-4d33-98f9-ed1530d6b5c0","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c495bfe0-5b3f-4f90-9097-bd12a8def48a","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.1]","[-0.03, 3.1]","[-0.03, 3.1]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.1]"},{"POS_ARR_DELAY":"[-0.03, 3.1]"},{"POS_ARR_DELAY":"[-0.03, 3.1]"}],"values":[0.6,0.0,1.5555555555555556],"x":[8,15,8],"y":["Wednesday","Friday","Saturday"]}},"id":"dd18fbb1-3347-462b-b1ab-2f607f29cea1","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"859c0e34-f419-44e1-9b92-73700d974252","type":"PanTool"},{"id":"c2d80c47-ab23-4012-be89-ac91bbe40375","type":"WheelZoomTool"},{"id":"21cc54b5-0ef8-4529-bced-de95d1567eab","type":"BoxZoomTool"},{"id":"d8e73d8c-c0fa-4688-b8f9-b5ed77ca5009","type":"SaveTool"},{"id":"10da927b-a745-4742-b97c-a23c5f41a0b4","type":"ResetTool"},{"id":"32e3fc8d-8487-4bd4-8e1a-111c8c7580b2","type":"HelpTool"}]},"id":"f4eddad2-f7b3-4058-9c7a-e453af01fe40","type":"Toolbar"},{"attributes":{"plot":{"id":"cba4d0bb-bc39-4fe3-91f6-7ed23972f105","subtype":"Chart","type":"Plot"}},"id":"c2d80c47-ab23-4012-be89-ac91bbe40375","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.4, 12.5]","(9.4, 12.5]","(9.4, 12.5]","(9.4, 12.5]","(9.4, 12.5]"],"chart_index":[{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"},{"POS_ARR_DELAY":"(9.4, 12.5]"}],"values":[11.79245283018868,10.9,10.020408163265307,10.710144927536232,11.273972602739725],"x":[20,8,19,19,19],"y":["Monday","Tuesday","Wednesday","Thursday","Sunday"]}},"id":"70337ad1-2b91-4921-9385-05319360b868","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"4ec0d22e-d62c-4c29-9e94-c1aff28895fa","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(15.7, 18.8]"],"chart_index":[{"POS_ARR_DELAY":"(15.7, 18.8]"}],"values":[17.6],"x":[19],"y":["Saturday"]}},"id":"9e9c6603-4149-4e40-bc4c-9fe19809f622","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"cc6b8708-8ef4-4fd3-9bd9-b2b9f7f82ade","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"},"ticker":{"id":"5fa4e56f-f2c9-4683-a20c-ab3ff117d422","type":"CategoricalTicker"}},"id":"385aced4-6880-4604-873d-ebd45a89ec30","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"650925fb-14eb-40bf-9f5d-63f024a3fae0","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]","(6.3, 9.4]"],"chart_index":[{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"},{"POS_ARR_DELAY":"(6.3, 9.4]"}],"values":[7.8,7.363636363636363,6.277777777777778,8.422535211267606,8.323529411764707,8.5,7.711538461538462],"x":[8,8,20,19,20,8,20],"y":["Monday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"5b61a52b-f5df-4f2a-bdc8-f89e51f5071c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3055f003-9cb4-4a61-b83a-a61fea75dcc4","subtype":"Chart","type":"Plot"}},"id":"6debed4c-480d-4b60-b129-cdbf42453982","type":"SaveTool"},{"attributes":{},"id":"cc6b8708-8ef4-4fd3-9bd9-b2b9f7f82ade","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"tabs":[{"id":"032a5dc3-909d-4c2e-8e10-5c42c2b9bd96","type":"Panel"},{"id":"688bac29-f301-4757-8f7e-d13f933cc766","type":"Panel"}]},"id":"d35c24bd-cb7a-4477-8415-105486a88a10","type":"Tabs"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1e25372d-0f9d-4b43-b103-2d994a24434e","type":"BoxAnnotation"}],"root_ids":["d35c24bd-cb7a-4477-8415-105486a88a10"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"57fce729-ba5a-4416-aec0-1d20961fc123","elementid":"ee8ea66a-6ef0-4e78-8605-48401b585604","modelid":"d35c24bd-cb7a-4477-8415-105486a88a10"}];
                  
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