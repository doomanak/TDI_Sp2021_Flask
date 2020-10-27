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
      };var element = document.getElementById("ef5f7775-4d29-4b86-b6fc-3be6c0810147");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ef5f7775-4d29-4b86-b6fc-3be6c0810147' but no matching script tag was found. ")
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
                  var docs_json = {"efb8e071-ad21-49ee-a40e-b37cd52e6879":{"roots":{"references":[{"attributes":{"data_source":{"id":"6c2b3999-933c-4db5-93d7-7ce2207b27dc","type":"ColumnDataSource"},"glyph":{"id":"e4244169-3766-4760-988c-9baa36db5805","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"32099f46-6a22-4309-8dfc-0487a9c67008","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b6235801-280a-4740-8479-36fd24a3d357","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"afa4e106-b489-4004-a0fd-8a6171dec1b4","type":"ColumnDataSource"},"glyph":{"id":"de287e7f-d56d-47a9-84f9-b8aca2f10c9d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c19e9082-0842-488d-8654-3531c80e2fe2","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"bcef61bf-b761-4a2e-adeb-65319f8f034b","type":"BoxAnnotation"},"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"}},"id":"662f4c2c-b96e-4993-a045-76c20f0edc34","type":"BoxZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a5b30095-560e-4aec-be03-22100fbaadcb","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"},"ticker":{"id":"016898b8-58c6-4b32-8a1a-b4cc7eadf1d3","type":"CategoricalTicker"}},"id":"c91a2562-2a61-4017-b77f-80476cea0b1f","type":"CategoricalAxis"},{"attributes":{},"id":"c1411dec-7a7b-4b58-9752-019ef1801a6d","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"}},"id":"d2e0e4b6-984f-41f8-932e-e9f396360d40","type":"HelpTool"},{"attributes":{},"id":"18b9781e-eaa1-4135-a644-186744e8c045","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.8333333333333335,0.0,0.0,2.75,2.4,0.0,2.888888888888889],"x":[16,17,17,16,17,16,17],"y":["Tuesday","Tuesday","Wednesday","Thursday","Thursday","Sunday","Sunday"]}},"id":"58da24e7-aeb3-46ef-bf08-ae7e44cb6a44","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"08c88e01-2b76-45aa-9c9e-d807b8770a05","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"2e45ddb7-fa65-42ea-a0ea-35721aaad9bc","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"709d7750-849d-419d-b3a1-9ba1d6faadda","type":"Rect"},{"attributes":{},"id":"94c08fac-805d-4b37-af3d-3d7194d2838a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"}},"id":"876eae85-5a0a-4c06-8f56-9bfaa0431154","type":"WheelZoomTool"},{"attributes":{},"id":"7fef31e5-5a1c-467d-83bd-65fa152c74e8","type":"BasicTicker"},{"attributes":{"child":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"279574df-ec7d-4d73-a1e2-5ea946945322","type":"Panel"},{"attributes":{"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"}},"id":"23719583-a698-4a3f-8d82-5d44c9ec6b6f","type":"SaveTool"},{"attributes":{"color_mapper":{"id":"0757d2e1-d093-4766-b0a4-602694caa92a","type":"LinearColorMapper"},"formatter":{"id":"ad92e096-a11b-4e7f-9e6f-4c1e18f0e0fb","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"},"ticker":{"id":"ebf88d3f-0f6b-4275-8ba7-e6defff9415f","type":"BasicTicker"}},"id":"ed365b19-aa43-44ae-8ee1-67639019b1e4","type":"ColorBar"},{"attributes":{"callback":null,"tabs":[{"id":"279574df-ec7d-4d73-a1e2-5ea946945322","type":"Panel"},{"id":"b7d454be-1b0e-4991-8848-eeca5fa833a6","type":"Panel"}]},"id":"edc6bdf7-274e-4efe-89f1-b3de087cc138","type":"Tabs"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bcef61bf-b761-4a2e-adeb-65319f8f034b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"209405c8-a55f-4ff9-a648-0f91fbb82f7e","type":"ColumnDataSource"},"glyph":{"id":"c4b0b180-20fd-4c99-b39a-45799d531b1f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef39ae6d-e644-48b0-9882-2afcf6d831de","type":"GlyphRenderer"},{"attributes":{},"id":"ebf88d3f-0f6b-4275-8ba7-e6defff9415f","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"12f04382-7878-4607-85e3-df6c8c4ea1d2","type":"FactorRange"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"812f35a0-504d-4aa3-bdd2-8be07a4cc928","type":"BasicTickFormatter"},"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"},"ticker":{"id":"5f08864f-725c-4f75-9757-a5f52c2a8274","type":"BasicTicker"}},"id":"19608b58-70a7-4e1c-bd7b-139164704d38","type":"LinearAxis"},{"attributes":{},"id":"20443a8f-ed96-4cfe-aade-e908c1a4dc87","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"}},"id":"da3b6bd6-53fb-4fde-8cda-f0e7e170365d","type":"ResetTool"},{"attributes":{},"id":"812f35a0-504d-4aa3-bdd2-8be07a4cc928","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"}},"id":"c9eff216-e2aa-40f9-b913-8962e99029ec","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"}},"id":"0532f2f0-af16-45f1-8ec4-a08c23167969","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"1a5a5fe9-6e55-492d-a9e7-7f4fbe3bbe91","type":"Title"},{"attributes":{"data_source":{"id":"0d686764-beef-48bb-abc9-74bbd6ee2012","type":"ColumnDataSource"},"glyph":{"id":"42811d89-85e0-4709-ad75-3c03c28d11f5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6159d3d3-2d5d-4652-963e-ad0d29a6f6e6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5d055916-68e0-4cc2-a196-ac0f73c07b7f","type":"ColumnDataSource"},"glyph":{"id":"d4e5a22f-925c-42a0-a463-6035fb3f94b9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"beb71019-bc67-4b5d-8ade-71e924e9daef","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1493f047-5926-4811-8729-47b03eb95623","type":"ColumnDataSource"},"glyph":{"id":"8c733404-5c2f-4755-9bd0-2fc1a3e6a6fd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2113b2d5-6362-462a-bf6e-2ab2cba82552","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"de287e7f-d56d-47a9-84f9-b8aca2f10c9d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.6, 9.9]","(6.6, 9.9]"],"chart_index":[{"POS_ARR_DELAY":"(6.6, 9.9]"},{"POS_ARR_DELAY":"(6.6, 9.9]"}],"values":[6.666666666666667,6.888888888888889],"x":[16,16],"y":["Wednesday","Saturday"]}},"id":"5d055916-68e0-4cc2-a196-ac0f73c07b7f","type":"ColumnDataSource"},{"attributes":{},"id":"5f08864f-725c-4f75-9757-a5f52c2a8274","type":"BasicTicker"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"f0747b3e-acfe-4bc5-9fef-19e80dfab105","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.9, 13.2]","(9.9, 13.2]"],"chart_index":[{"POS_ARR_DELAY":"(9.9, 13.2]"},{"POS_ARR_DELAY":"(9.9, 13.2]"}],"values":[10.6,13.125],"x":[17,17],"y":["Monday","Saturday"]}},"id":"b9eaf1c7-e795-40a5-84f0-d3340b6f9ae0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.6, 9.9]","(6.6, 9.9]"],"chart_index":[{"POS_ARR_DELAY":"(6.6, 9.9]"},{"POS_ARR_DELAY":"(6.6, 9.9]"}],"values":[6.666666666666667,6.888888888888889],"x":[16,16],"y":["Wednesday","Saturday"]}},"id":"fa7d481b-d282-4f1b-9713-55fbd218e554","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3a337650-f3d9-4580-bb15-d670a2696d93","type":"ColumnDataSource"},"glyph":{"id":"d37c05f3-d8ed-4416-863b-291930ccc725","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ba734a1e-c710-4eaf-8d00-87caa587f295","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4e5a22f-925c-42a0-a463-6035fb3f94b9","type":"Rect"},{"attributes":{"data_source":{"id":"da0bc544-f7b2-4bb5-ba8b-e2f2af33aae3","type":"ColumnDataSource"},"glyph":{"id":"37591c41-5a7d-41b4-b09f-74e54db41c14","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6f0c4c68-c981-4673-9255-9175d025a552","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4244169-3766-4760-988c-9baa36db5805","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.3, 29.6]"],"chart_index":[{"POS_ARR_DELAY":"(26.3, 29.6]"}],"values":[29.6],"x":[17],"y":["Friday"]}},"id":"0d686764-beef-48bb-abc9-74bbd6ee2012","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"37591c41-5a7d-41b4-b09f-74e54db41c14","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"ae231caf-5b55-4351-a1c6-501f297f9846","type":"FactorRange"},{"attributes":{"data_source":{"id":"58da24e7-aeb3-46ef-bf08-ae7e44cb6a44","type":"ColumnDataSource"},"glyph":{"id":"08c88e01-2b76-45aa-9c9e-d807b8770a05","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"41bee6a0-e508-4bb5-9572-f87802a4dbf3","type":"GlyphRenderer"},{"attributes":{},"id":"016898b8-58c6-4b32-8a1a-b4cc7eadf1d3","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.3, 29.6]"],"chart_index":[{"POS_ARR_DELAY":"(26.3, 29.6]"}],"values":[29.6],"x":[17],"y":["Friday"]}},"id":"da0bc544-f7b2-4bb5-ba8b-e2f2af33aae3","type":"ColumnDataSource"},{"attributes":{},"id":"627d32d6-22ba-411c-8650-8d901a272afd","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(19.7, 23.02]"],"chart_index":[{"POS_ARR_DELAY":"(19.7, 23.02]"}],"values":[22.666666666666668],"x":[16],"y":["Friday"]}},"id":"209405c8-a55f-4ff9-a648-0f91fbb82f7e","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"99d2424f-6cbb-4ac7-b6c5-4e632d73ac0f","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"9a1fe6f8-558f-4b70-86a3-1d7387e843c1","type":"LinearColorMapper"},{"attributes":{},"id":"7bd4a352-6ce9-429d-8d0d-ee68f279fcbd","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(9.9, 13.2]","(9.9, 13.2]"],"chart_index":[{"POS_ARR_DELAY":"(9.9, 13.2]"},{"POS_ARR_DELAY":"(9.9, 13.2]"}],"values":[10.6,13.125],"x":[17,17],"y":["Monday","Saturday"]}},"id":"1f90aca1-33d0-4f5e-be7f-efde0613acd7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.6]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.6]"}],"values":[4.083333333333333],"x":[16],"y":["Monday"]}},"id":"6c2b3999-933c-4db5-93d7-7ce2207b27dc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1f90aca1-33d0-4f5e-be7f-efde0613acd7","type":"ColumnDataSource"},"glyph":{"id":"709d7750-849d-419d-b3a1-9ba1d6faadda","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ddcaaf9-b24b-4476-9097-02d641aca957","type":"GlyphRenderer"},{"attributes":{},"id":"a5b30095-560e-4aec-be03-22100fbaadcb","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"b9eaf1c7-e795-40a5-84f0-d3340b6f9ae0","type":"ColumnDataSource"},"glyph":{"id":"99d2424f-6cbb-4ac7-b6c5-4e632d73ac0f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4aed424b-5b2c-4b7c-ace9-a47ee8a283ec","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"0757d2e1-d093-4766-b0a4-602694caa92a","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"fa7d481b-d282-4f1b-9713-55fbd218e554","type":"ColumnDataSource"},"glyph":{"id":"bad017b3-55c0-444a-857c-11879b2c241d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a01c17a0-f6f7-49d4-8d13-699ffa4c9b92","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c1411dec-7a7b-4b58-9752-019ef1801a6d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"},"ticker":{"id":"20443a8f-ed96-4cfe-aade-e908c1a4dc87","type":"CategoricalTicker"}},"id":"38a3a9a0-bf4b-4b58-9493-ace41b094f63","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":23},"id":"08bfede3-f45b-4742-9751-fd3fec020533","type":"Range1d"},{"attributes":{},"id":"ad92e096-a11b-4e7f-9e6f-4c1e18f0e0fb","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c733404-5c2f-4755-9bd0-2fc1a3e6a6fd","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d37c05f3-d8ed-4416-863b-291930ccc725","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f687e67f-a9cf-4269-a9b0-a0eeb03f71af","type":"PanTool"},{"id":"876eae85-5a0a-4c06-8f56-9bfaa0431154","type":"WheelZoomTool"},{"id":"662f4c2c-b96e-4993-a045-76c20f0edc34","type":"BoxZoomTool"},{"id":"f52dd199-4322-4178-9afe-c63f5abc5650","type":"SaveTool"},{"id":"da3b6bd6-53fb-4fde-8cda-f0e7e170365d","type":"ResetTool"},{"id":"d2e0e4b6-984f-41f8-932e-e9f396360d40","type":"HelpTool"}]},"id":"5e8e4e37-55b9-438b-aeb7-f6d64ef5a956","type":"Toolbar"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"94c08fac-805d-4b37-af3d-3d7194d2838a","type":"BasicTickFormatter"},"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"},"ticker":{"id":"627d32d6-22ba-411c-8650-8d901a272afd","type":"BasicTicker"}},"id":"f12a52fa-f296-4b91-9cde-85dd61a457a4","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(19.7, 23.02]"],"chart_index":[{"POS_ARR_DELAY":"(19.7, 23.02]"}],"values":[22.666666666666668],"x":[16],"y":["Friday"]}},"id":"afa4e106-b489-4004-a0fd-8a6171dec1b4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"}},"id":"f52dd199-4322-4178-9afe-c63f5abc5650","type":"SaveTool"},{"attributes":{},"id":"7b002873-c0c0-4724-a604-ada2e9b13479","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8d4da187-7758-45e6-ba70-422bbee79a71","type":"PanTool"},{"id":"c9eff216-e2aa-40f9-b913-8962e99029ec","type":"WheelZoomTool"},{"id":"2e180f13-47d2-480e-b9ab-bcc926939c66","type":"BoxZoomTool"},{"id":"23719583-a698-4a3f-8d82-5d44c9ec6b6f","type":"SaveTool"},{"id":"0532f2f0-af16-45f1-8ec4-a08c23167969","type":"ResetTool"},{"id":"beb349bb-9895-4980-9e02-2105240d17b1","type":"HelpTool"}]},"id":"511bd28e-eb4d-491e-b1d8-4a1774d90f76","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.6]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.6]"}],"values":[4.083333333333333],"x":[16],"y":["Monday"]}},"id":"1493f047-5926-4811-8729-47b03eb95623","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"f12a52fa-f296-4b91-9cde-85dd61a457a4","type":"LinearAxis"}],"left":[{"id":"38a3a9a0-bf4b-4b58-9493-ace41b094f63","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b6235801-280a-4740-8479-36fd24a3d357","type":"BoxAnnotation"},{"id":"6f0c4c68-c981-4673-9255-9175d025a552","type":"GlyphRenderer"},{"id":"c19e9082-0842-488d-8654-3531c80e2fe2","type":"GlyphRenderer"},{"id":"4aed424b-5b2c-4b7c-ace9-a47ee8a283ec","type":"GlyphRenderer"},{"id":"beb71019-bc67-4b5d-8ade-71e924e9daef","type":"GlyphRenderer"},{"id":"2113b2d5-6362-462a-bf6e-2ab2cba82552","type":"GlyphRenderer"},{"id":"ba734a1e-c710-4eaf-8d00-87caa587f295","type":"GlyphRenderer"},{"id":"f12a52fa-f296-4b91-9cde-85dd61a457a4","type":"LinearAxis"},{"id":"38a3a9a0-bf4b-4b58-9493-ace41b094f63","type":"CategoricalAxis"},{"id":"ed365b19-aa43-44ae-8ee1-67639019b1e4","type":"ColorBar"}],"right":[{"id":"ed365b19-aa43-44ae-8ee1-67639019b1e4","type":"ColorBar"}],"title":{"id":"1a5a5fe9-6e55-492d-a9e7-7f4fbe3bbe91","type":"Title"},"tool_events":{"id":"18b9781e-eaa1-4135-a644-186744e8c045","type":"ToolEvents"},"toolbar":{"id":"511bd28e-eb4d-491e-b1d8-4a1774d90f76","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"08bfede3-f45b-4742-9751-fd3fec020533","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ae231caf-5b55-4351-a1c6-501f297f9846","type":"FactorRange"}},"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.8333333333333335,0.0,0.0,2.75,2.4,0.0,2.888888888888889],"x":[16,17,17,16,17,16,17],"y":["Tuesday","Tuesday","Wednesday","Thursday","Thursday","Sunday","Sunday"]}},"id":"3a337650-f3d9-4580-bb15-d670a2696d93","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4b0b180-20fd-4c99-b39a-45799d531b1f","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"42811d89-85e0-4709-ad75-3c03c28d11f5","type":"Rect"},{"attributes":{"color_mapper":{"id":"9a1fe6f8-558f-4b70-86a3-1d7387e843c1","type":"LinearColorMapper"},"formatter":{"id":"7b002873-c0c0-4724-a604-ada2e9b13479","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"},"ticker":{"id":"7fef31e5-5a1c-467d-83bd-65fa152c74e8","type":"BasicTicker"}},"id":"c2082c62-4088-4e07-9266-2f70c5ec39e2","type":"ColorBar"},{"attributes":{"overlay":{"id":"b6235801-280a-4740-8479-36fd24a3d357","type":"BoxAnnotation"},"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"}},"id":"2e180f13-47d2-480e-b9ab-bcc926939c66","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"}},"id":"f687e67f-a9cf-4269-a9b0-a0eeb03f71af","type":"PanTool"},{"attributes":{"child":{"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"b7d454be-1b0e-4991-8848-eeca5fa833a6","type":"Panel"},{"attributes":{"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"}},"id":"8d4da187-7758-45e6-ba70-422bbee79a71","type":"PanTool"},{"attributes":{"plot":{"id":"e66911f5-c6f8-43ea-94f5-4d50130e7624","subtype":"Chart","type":"Plot"}},"id":"beb349bb-9895-4980-9e02-2105240d17b1","type":"HelpTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"19608b58-70a7-4e1c-bd7b-139164704d38","type":"LinearAxis"}],"left":[{"id":"c91a2562-2a61-4017-b77f-80476cea0b1f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"bcef61bf-b761-4a2e-adeb-65319f8f034b","type":"BoxAnnotation"},{"id":"6159d3d3-2d5d-4652-963e-ad0d29a6f6e6","type":"GlyphRenderer"},{"id":"ef39ae6d-e644-48b0-9882-2afcf6d831de","type":"GlyphRenderer"},{"id":"6ddcaaf9-b24b-4476-9097-02d641aca957","type":"GlyphRenderer"},{"id":"a01c17a0-f6f7-49d4-8d13-699ffa4c9b92","type":"GlyphRenderer"},{"id":"32099f46-6a22-4309-8dfc-0487a9c67008","type":"GlyphRenderer"},{"id":"41bee6a0-e508-4bb5-9572-f87802a4dbf3","type":"GlyphRenderer"},{"id":"19608b58-70a7-4e1c-bd7b-139164704d38","type":"LinearAxis"},{"id":"c91a2562-2a61-4017-b77f-80476cea0b1f","type":"CategoricalAxis"},{"id":"c2082c62-4088-4e07-9266-2f70c5ec39e2","type":"ColorBar"}],"right":[{"id":"c2082c62-4088-4e07-9266-2f70c5ec39e2","type":"ColorBar"}],"title":{"id":"f0747b3e-acfe-4bc5-9fef-19e80dfab105","type":"Title"},"tool_events":{"id":"7bd4a352-6ce9-429d-8d0d-ee68f279fcbd","type":"ToolEvents"},"toolbar":{"id":"5e8e4e37-55b9-438b-aeb7-f6d64ef5a956","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"2e45ddb7-fa65-42ea-a0ea-35721aaad9bc","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"12f04382-7878-4607-85e3-df6c8c4ea1d2","type":"FactorRange"}},"id":"92eac29a-472b-47d3-8253-fa9713bbbae0","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bad017b3-55c0-444a-857c-11879b2c241d","type":"Rect"}],"root_ids":["edc6bdf7-274e-4efe-89f1-b3de087cc138"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"efb8e071-ad21-49ee-a40e-b37cd52e6879","elementid":"ef5f7775-4d29-4b86-b6fc-3be6c0810147","modelid":"edc6bdf7-274e-4efe-89f1-b3de087cc138"}];
                  
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