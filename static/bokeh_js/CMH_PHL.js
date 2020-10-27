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
      };var element = document.getElementById("9b8f642d-73a9-402a-a0e3-67092e88c944");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9b8f642d-73a9-402a-a0e3-67092e88c944' but no matching script tag was found. ")
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
                  var docs_json = {"2cba3621-1623-456e-8461-48c6476cff26":{"roots":{"references":[{"attributes":{},"id":"ee4f7cc8-781a-49c4-9c64-759bf194cf6d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Tuesday","Thursday","Sunday","Monday","Wednesday","Friday","Saturday"]},"id":"e19cc960-a733-49f8-a3c0-447236599d55","type":"FactorRange"},{"attributes":{},"id":"58e9b7c8-1e0d-4778-8b1b-4b49f4418868","type":"CategoricalTicker"},{"attributes":{},"id":"ea1c1fb8-649f-4b8e-b2a7-9b124347c34a","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"548a5e58-ddff-4e25-88c3-e44027ee23be","type":"PanTool"},{"id":"7e675fb3-4d14-4874-9012-4d3f7b4eac6a","type":"WheelZoomTool"},{"id":"722fae1e-dc26-436f-afda-e365756aa428","type":"BoxZoomTool"},{"id":"7688e951-a916-4807-a9a5-529e95d6a0ef","type":"SaveTool"},{"id":"60e76146-0b99-4ba5-a296-f94898473671","type":"ResetTool"},{"id":"29d1e25b-263d-47db-be2a-694dd7f636f1","type":"HelpTool"}]},"id":"403a832e-a570-4ff8-894a-ce75279fd718","type":"Toolbar"},{"attributes":{},"id":"34f8b40c-b38b-4871-b795-eff36c7e0057","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Frontier Airlines "},"id":"7cc27073-2e07-471d-8d3c-f8f28e54a300","type":"Title"},{"attributes":{"data_source":{"id":"d612efd2-f4e5-4c6d-af44-287cc8a5d36b","type":"ColumnDataSource"},"glyph":{"id":"38cb182a-16b4-4653-94f1-00009c4c4ec5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f63cade3-6634-454c-bbcb-e5b0d1f2503a","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c605ca8-9a8c-4530-871d-c459186b6ec4","type":"Rect"},{"attributes":{"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"}},"id":"af477d8e-1129-4ed2-a7e5-b283b87ae46f","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb06b927-4100-4133-a6d2-8621093a87ae","type":"BoxAnnotation"},{"attributes":{"callback":null,"tabs":[{"id":"3323cda1-a0ac-443d-aa9e-fa63ef096c26","type":"Panel"},{"id":"ffc1eeab-f459-4e8a-950b-c2960c8e0f75","type":"Panel"}]},"id":"f122d8be-0765-4a7c-928a-1c974fcb9e59","type":"Tabs"},{"attributes":{"overlay":{"id":"cb06b927-4100-4133-a6d2-8621093a87ae","type":"BoxAnnotation"},"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"}},"id":"722fae1e-dc26-436f-afda-e365756aa428","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"}},"id":"00d22c77-8300-4bd7-b965-8a60c80614f0","type":"SaveTool"},{"attributes":{"data_source":{"id":"c7fda6e4-737a-429d-8eaa-e3ed391c4da5","type":"ColumnDataSource"},"glyph":{"id":"a747b3e0-3247-4f83-8c54-cf234962b9bd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b19ea5cd-93d6-4f57-b4e3-d7264be017a3","type":"GlyphRenderer"},{"attributes":{},"id":"ca0ddd7a-7242-4afc-beaf-b8ea32c9f383","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24.9, 25.8]"],"chart_index":[{"POS_ARR_DELAY":"(24.9, 25.8]"}],"values":[25.23076923076923],"x":[15],"y":["Thursday"]}},"id":"d612efd2-f4e5-4c6d-af44-287cc8a5d36b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.2, 30]"],"chart_index":[{"POS_ARR_DELAY":"(29.2, 30]"}],"values":[30.0],"x":[15],"y":["Sunday"]}},"id":"6622cbd3-e74f-4c59-8b80-a561fd0e1c52","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"f8648bc1-cf8b-440c-8975-3b08c7d3b6e7","type":"Range1d"},{"attributes":{"data_source":{"id":"faeeefb4-5549-447d-8d86-e235deb1f7b8","type":"ColumnDataSource"},"glyph":{"id":"9f308804-3e5b-40dc-a394-887c4d567eed","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e9eb69ac-c768-4830-b937-02cd745aa349","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f308804-3e5b-40dc-a394-887c4d567eed","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"43368b9d-6045-4065-bfe2-1554778d001e","type":"LinearAxis"}],"left":[{"id":"8d0b1788-f5ff-476c-a9c5-07abd8599e44","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"6e0ca78e-950b-4c1a-baaf-0e66149a386a","type":"BoxAnnotation"},{"id":"fc64e951-4929-42b6-8a8e-7f6d13532c1a","type":"GlyphRenderer"},{"id":"c56894cc-69da-4077-b085-31e37f6dd724","type":"GlyphRenderer"},{"id":"b19ea5cd-93d6-4f57-b4e3-d7264be017a3","type":"GlyphRenderer"},{"id":"43368b9d-6045-4065-bfe2-1554778d001e","type":"LinearAxis"},{"id":"8d0b1788-f5ff-476c-a9c5-07abd8599e44","type":"CategoricalAxis"},{"id":"6f50d57f-b40e-46d8-86a8-fed36785d872","type":"ColorBar"}],"right":[{"id":"6f50d57f-b40e-46d8-86a8-fed36785d872","type":"ColorBar"}],"title":{"id":"7cc27073-2e07-471d-8d3c-f8f28e54a300","type":"Title"},"tool_events":{"id":"c75a839a-b073-4a77-8e9d-0e11840bbb33","type":"ToolEvents"},"toolbar":{"id":"aa8b58ac-5723-49f1-b7f2-c954ddc9ee52","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"2685bb11-0116-4e40-bd13-1c589742407e","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e19cc960-a733-49f8-a3c0-447236599d55","type":"FactorRange"}},"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bc97822-dc57-4d9f-bae2-584bd90ebe03","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"ea1c1fb8-649f-4b8e-b2a7-9b124347c34a","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"},"ticker":{"id":"58e9b7c8-1e0d-4778-8b1b-4b49f4418868","type":"CategoricalTicker"}},"id":"8d0b1788-f5ff-476c-a9c5-07abd8599e44","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"}},"id":"548a5e58-ddff-4e25-88c3-e44027ee23be","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(24.9, 25.8]"],"chart_index":[{"POS_ARR_DELAY":"(24.9, 25.8]"}],"values":[25.23076923076923],"x":[15],"y":["Thursday"]}},"id":"5a9c70e4-5509-4662-a113-af85b09aab7c","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"2685bb11-0116-4e40-bd13-1c589742407e","type":"Range1d"},{"attributes":{"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"}},"id":"60e76146-0b99-4ba5-a296-f94898473671","type":"ResetTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"c67a1f1b-3b30-486b-ae3d-45a48cf37628","type":"BasicTickFormatter"},"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"},"ticker":{"id":"b25328e2-e0fb-4de7-88a1-41ac31586d14","type":"BasicTicker"}},"id":"43368b9d-6045-4065-bfe2-1554778d001e","type":"LinearAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"cb246995-3eee-4152-9df2-0e52142e6b0b","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"}},"id":"7e675fb3-4d14-4874-9012-4d3f7b4eac6a","type":"WheelZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"43febcfb-2ed0-43f8-9eec-567cdf649995","type":"BasicTickFormatter"},"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"},"ticker":{"id":"49b9b94e-8f16-40ca-a565-0dd05d9f44e0","type":"BasicTicker"}},"id":"45c18f87-f8dd-4531-93a0-38a105893de6","type":"LinearAxis"},{"attributes":{"overlay":{"id":"6e0ca78e-950b-4c1a-baaf-0e66149a386a","type":"BoxAnnotation"},"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"}},"id":"9ed2c16d-b6d3-4f31-94f1-2e29451a9a23","type":"BoxZoomTool"},{"attributes":{"child":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"3323cda1-a0ac-443d-aa9e-fa63ef096c26","type":"Panel"},{"attributes":{},"id":"829fc348-5d95-4d5d-9c2a-80420a3cfaa2","type":"ToolEvents"},{"attributes":{"color_mapper":{"id":"cf3758d7-164b-465f-82d1-c594083c403a","type":"LinearColorMapper"},"formatter":{"id":"34f8b40c-b38b-4871-b795-eff36c7e0057","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"},"ticker":{"id":"a8e963b1-d5e2-431e-9094-be3ba80b4122","type":"BasicTicker"}},"id":"8e959725-aa9c-4fbd-a86c-323064d3da7e","type":"ColorBar"},{"attributes":{"data_source":{"id":"5b766a5b-39a3-4392-8a61-68fba7f6f813","type":"ColumnDataSource"},"glyph":{"id":"ac18cb10-20a7-4ddf-b84b-a2b5c2330a53","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2ac47eb-87d9-48d5-a7e5-83bab11fe57f","type":"GlyphRenderer"},{"attributes":{"child":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"},"title":"F9"},"id":"ffc1eeab-f459-4e8a-950b-c2960c8e0f75","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"cf3758d7-164b-465f-82d1-c594083c403a","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a747b3e0-3247-4f83-8c54-cf234962b9bd","type":"Rect"},{"attributes":{},"id":"a8e963b1-d5e2-431e-9094-be3ba80b4122","type":"BasicTicker"},{"attributes":{"data_source":{"id":"6622cbd3-e74f-4c59-8b80-a561fd0e1c52","type":"ColumnDataSource"},"glyph":{"id":"4bc97822-dc57-4d9f-bae2-584bd90ebe03","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fc64e951-4929-42b6-8a8e-7f6d13532c1a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"}},"id":"761ebc22-ae5a-486e-bc07-6df332edc260","type":"ResetTool"},{"attributes":{},"id":"c75a839a-b073-4a77-8e9d-0e11840bbb33","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(29.2, 30]"],"chart_index":[{"POS_ARR_DELAY":"(29.2, 30]"}],"values":[30.0],"x":[15],"y":["Sunday"]}},"id":"5b766a5b-39a3-4392-8a61-68fba7f6f813","type":"ColumnDataSource"},{"attributes":{},"id":"c67a1f1b-3b30-486b-ae3d-45a48cf37628","type":"BasicTickFormatter"},{"attributes":{"color_mapper":{"id":"cb246995-3eee-4152-9df2-0e52142e6b0b","type":"LinearColorMapper"},"formatter":{"id":"ee4f7cc8-781a-49c4-9c64-759bf194cf6d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"},"ticker":{"id":"ca0ddd7a-7242-4afc-beaf-b8ea32c9f383","type":"BasicTicker"}},"id":"6f50d57f-b40e-46d8-86a8-fed36785d872","type":"ColorBar"},{"attributes":{"data_source":{"id":"5a9c70e4-5509-4662-a113-af85b09aab7c","type":"ColumnDataSource"},"glyph":{"id":"9c605ca8-9a8c-4530-871d-c459186b6ec4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c56894cc-69da-4077-b085-31e37f6dd724","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac18cb10-20a7-4ddf-b84b-a2b5c2330a53","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"1c483136-d09c-4148-ab4f-0c616bda9f73","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"},"ticker":{"id":"4dabe693-98eb-43b3-9441-5749db7f7750","type":"CategoricalTicker"}},"id":"dd375cda-4a3b-40f6-8c01-e0aaca510d57","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"}},"id":"29d1e25b-263d-47db-be2a-694dd7f636f1","type":"HelpTool"},{"attributes":{"plot":{"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"}},"id":"7688e951-a916-4807-a9a5-529e95d6a0ef","type":"SaveTool"},{"attributes":{},"id":"49b9b94e-8f16-40ca-a565-0dd05d9f44e0","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Tuesday","Thursday","Sunday","Monday","Wednesday","Friday","Saturday"]},"id":"01f6ad47-98bb-4bd1-9f9c-e48f0cc42ef8","type":"FactorRange"},{"attributes":{"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"}},"id":"03807798-30c9-4289-b9c9-80cf70255293","type":"PanTool"},{"attributes":{},"id":"4dabe693-98eb-43b3-9441-5749db7f7750","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[22.4, 23.2]"],"chart_index":[{"POS_ARR_DELAY":"[22.4, 23.2]"}],"values":[22.384615384615383],"x":[15],"y":["Tuesday"]}},"id":"c7fda6e4-737a-429d-8eaa-e3ed391c4da5","type":"ColumnDataSource"},{"attributes":{},"id":"43febcfb-2ed0-43f8-9eec-567cdf649995","type":"BasicTickFormatter"},{"attributes":{},"id":"b25328e2-e0fb-4de7-88a1-41ac31586d14","type":"BasicTicker"},{"attributes":{"plot":{"id":"5ac1008a-2e57-4c46-9bda-65e473295be1","subtype":"Chart","type":"Plot"}},"id":"4aebb39d-9fa7-4212-9e25-9c1103569551","type":"WheelZoomTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"45c18f87-f8dd-4531-93a0-38a105893de6","type":"LinearAxis"}],"left":[{"id":"dd375cda-4a3b-40f6-8c01-e0aaca510d57","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"cb06b927-4100-4133-a6d2-8621093a87ae","type":"BoxAnnotation"},{"id":"c2ac47eb-87d9-48d5-a7e5-83bab11fe57f","type":"GlyphRenderer"},{"id":"f63cade3-6634-454c-bbcb-e5b0d1f2503a","type":"GlyphRenderer"},{"id":"e9eb69ac-c768-4830-b937-02cd745aa349","type":"GlyphRenderer"},{"id":"45c18f87-f8dd-4531-93a0-38a105893de6","type":"LinearAxis"},{"id":"dd375cda-4a3b-40f6-8c01-e0aaca510d57","type":"CategoricalAxis"},{"id":"8e959725-aa9c-4fbd-a86c-323064d3da7e","type":"ColorBar"}],"right":[{"id":"8e959725-aa9c-4fbd-a86c-323064d3da7e","type":"ColorBar"}],"title":{"id":"4762ac82-9958-46e0-800f-3b443fdbd964","type":"Title"},"tool_events":{"id":"829fc348-5d95-4d5d-9c2a-80420a3cfaa2","type":"ToolEvents"},"toolbar":{"id":"403a832e-a570-4ff8-894a-ce75279fd718","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"f8648bc1-cf8b-440c-8975-3b08c7d3b6e7","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"01f6ad47-98bb-4bd1-9f9c-e48f0cc42ef8","type":"FactorRange"}},"id":"5efc36fe-2910-4207-b0ce-8475c0ebd24c","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"1c483136-d09c-4148-ab4f-0c616bda9f73","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[22.4, 23.2]"],"chart_index":[{"POS_ARR_DELAY":"[22.4, 23.2]"}],"values":[22.384615384615383],"x":[15],"y":["Tuesday"]}},"id":"faeeefb4-5549-447d-8d86-e235deb1f7b8","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"38cb182a-16b4-4653-94f1-00009c4c4ec5","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03807798-30c9-4289-b9c9-80cf70255293","type":"PanTool"},{"id":"4aebb39d-9fa7-4212-9e25-9c1103569551","type":"WheelZoomTool"},{"id":"9ed2c16d-b6d3-4f31-94f1-2e29451a9a23","type":"BoxZoomTool"},{"id":"00d22c77-8300-4bd7-b965-8a60c80614f0","type":"SaveTool"},{"id":"761ebc22-ae5a-486e-bc07-6df332edc260","type":"ResetTool"},{"id":"af477d8e-1129-4ed2-a7e5-b283b87ae46f","type":"HelpTool"}]},"id":"aa8b58ac-5723-49f1-b7f2-c954ddc9ee52","type":"Toolbar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"4762ac82-9958-46e0-800f-3b443fdbd964","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e0ca78e-950b-4c1a-baaf-0e66149a386a","type":"BoxAnnotation"}],"root_ids":["f122d8be-0765-4a7c-928a-1c974fcb9e59"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"2cba3621-1623-456e-8461-48c6476cff26","elementid":"9b8f642d-73a9-402a-a0e3-67092e88c944","modelid":"f122d8be-0765-4a7c-928a-1c974fcb9e59"}];
                  
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