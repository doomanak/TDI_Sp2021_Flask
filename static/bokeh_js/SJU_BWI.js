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
      };var element = document.getElementById("d24cf835-99ce-4c24-a444-9934069bce13");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd24cf835-99ce-4c24-a444-9934069bce13' but no matching script tag was found. ")
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
                  var docs_json = {"2db4ef83-66c6-4480-af43-8d7f7d46ea79":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]"],"chart_index":[{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"}],"values":[14.090909090909092,13.0,14.25,12.067796610169491,13.58695652173913,14.166666666666666,13.545454545454545],"x":[16,17,12,17,15,18,14],"y":["Monday","Wednesday","Thursday","Thursday","Saturday","Saturday","Sunday"]}},"id":"211b9c8e-0c9f-4443-b862-76e61d344a35","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"24c301bc-e71a-4d8c-bd34-50c6b705164b","type":"ColumnDataSource"},"glyph":{"id":"1e183a42-9230-4c24-864f-0690db40eea8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8026954f-1d79-44bb-9586-86e4002174d3","type":"GlyphRenderer"},{"attributes":{},"id":"9e73fa3c-e125-48d9-911a-f2301fa1eaa2","type":"CategoricalTickFormatter"},{"attributes":{},"id":"d9d7cb66-8fb1-4d85-a28d-fa978e9ca298","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"b3037d85-7308-4d00-b60e-d33dc6be6395","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"64b6c7a6-30c7-447c-9551-dbd4c5bf95c4","type":"Rect"},{"attributes":{},"id":"3a31465a-82ed-463b-b306-f7a4eff8df0c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"dc6ff3e3-8ed5-4ebe-a225-f3facf10f6d9","type":"ColumnDataSource"},"glyph":{"id":"c68f4b89-854a-422a-94e4-5dd3e6fb8cf3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"50df5f5d-44d1-4ae0-b3d8-4fac9746d49f","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"1efdc0e3-b0f9-4eef-ad2b-851cadb49f71","type":"Panel"},{"id":"fc7f2a31-8edf-4e7f-a162-719b36092e0a","type":"Panel"}]},"id":"db96c45d-80d4-492d-8412-2b454d8512ec","type":"Tabs"},{"attributes":{"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"}},"id":"05df6f32-11d0-41e5-b99f-27f0518b269a","type":"HelpTool"},{"attributes":{"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"}},"id":"dbdbccf6-b777-4ae7-8b8c-7625761811f5","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.8, 26.7]","(23.8, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.8, 26.7]"},{"POS_ARR_DELAY":"(23.8, 26.7]"}],"values":[26.6,26.733333333333334],"x":[17,18],"y":["Saturday","Sunday"]}},"id":"24c301bc-e71a-4d8c-bd34-50c6b705164b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]"],"chart_index":[{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"}],"values":[5.075,5.666666666666667,4.666666666666667,4.5636363636363635,3.0714285714285716,3.2941176470588234,5.166666666666667,5.5636363636363635,5.796296296296297,3.951219512195122,3.823529411764706,4.514285714285714,5.447368421052632],"x":[6,12,13,16,6,7,12,16,16,6,7,6,13],"y":["Monday","Monday","Monday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Sunday"]}},"id":"51d6e20f-e8bf-4864-a150-cf505aa836b9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"284f4b3c-1052-4b6b-9d4d-60d507ad3b38","type":"ColumnDataSource"},"glyph":{"id":"6144da63-454b-48ef-88e6-2b481fafd9a7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"94c0e8d1-519a-4c07-bdf5-81c366277abe","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eddc0df6-5640-448b-ac9e-a1a671e85791","type":"Rect"},{"attributes":{"overlay":{"id":"30f78b61-a5c8-42ae-88bd-e4f4f37c49cc","type":"BoxAnnotation"},"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"}},"id":"442c1990-5e1f-4c27-9e8f-94e66ec30024","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]"],"chart_index":[{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"}],"values":[10.982456140350877,9.36111111111111,9.3,9.108108108108109,10.594594594594595,9.6,11.736842105263158,10.074074074074074,9.0],"x":[17,14,17,14,13,17,7,13,19],"y":["Monday","Tuesday","Tuesday","Wednesday","Friday","Friday","Saturday","Saturday","Sunday"]}},"id":"177e3b1e-0c0a-4c46-b31d-a7f0ef70f096","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e183a42-9230-4c24-864f-0690db40eea8","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"63b49a40-f561-4972-b5ab-f0d7483d1d01","type":"Range1d"},{"attributes":{"child":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"fc7f2a31-8edf-4e7f-a162-719b36092e0a","type":"Panel"},{"attributes":{},"id":"68740e89-16ec-42e6-8c02-e86ce13f321f","type":"ToolEvents"},{"attributes":{"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"}},"id":"99ba6c1e-4b42-44a3-a09b-1359adf3a05e","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"01b91922-f2e5-4328-ba22-cb2b6f04ed47","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c68f4b89-854a-422a-94e4-5dd3e6fb8cf3","type":"Rect"},{"attributes":{},"id":"e1f93754-0476-4ab5-8ca0-90fe587415b9","type":"BasicTickFormatter"},{"attributes":{},"id":"c7deabcf-d01f-4a54-a694-2ebcf720aaea","type":"ToolEvents"},{"attributes":{"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"}},"id":"260043d3-7515-49ce-b947-cebea39fc4a2","type":"ResetTool"},{"attributes":{"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"}},"id":"7e7a1430-2445-461b-9820-299bb19ceabb","type":"HelpTool"},{"attributes":{"data_source":{"id":"531baa69-b371-4f11-bc45-15ac7581153d","type":"ColumnDataSource"},"glyph":{"id":"eddc0df6-5640-448b-ac9e-a1a671e85791","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b12d8595-dfaa-4e08-9744-beccc8e866ef","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"}],"values":[0.35714285714285715,0.0,0.0,2.875,0.0,1.0,0.0,0.0,2.825,0.0,0.0,0.9473684210526315,0.2222222222222222,0.75,2.6296296296296298,0.5714285714285714,0.0,1.75,0.0,0.0],"x":[7,9,11,7,11,12,11,15,6,15,9,10,11,12,6,7,8,10,11,12],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday","Sunday","Sunday"]}},"id":"dc63afc5-a3a3-4e09-801b-cdf7a156c931","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5295e3c1-4273-4b88-a1b7-1b2a2a55083b","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14.9, 17.8]","(14.9, 17.8]","(14.9, 17.8]","(14.9, 17.8]","(14.9, 17.8]"],"chart_index":[{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"}],"values":[14.945945945945946,16.942857142857143,16.324324324324323,16.25,15.592592592592593],"x":[13,13,13,12,18],"y":["Tuesday","Wednesday","Thursday","Friday","Friday"]}},"id":"9c715940-b8d9-4fdf-9620-4f9459aa1d92","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"}},"id":"611eceec-007e-449f-b43c-e73f730dce63","type":"SaveTool"},{"attributes":{},"id":"33f8e864-616b-4291-9094-4dcf3ed70027","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14.9, 17.8]","(14.9, 17.8]","(14.9, 17.8]","(14.9, 17.8]","(14.9, 17.8]"],"chart_index":[{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"},{"POS_ARR_DELAY":"(14.9, 17.8]"}],"values":[14.945945945945946,16.942857142857143,16.324324324324323,16.25,15.592592592592593],"x":[13,13,13,12,18],"y":["Tuesday","Wednesday","Thursday","Friday","Friday"]}},"id":"f281a293-c23c-4416-8f16-d78635814016","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b54070f2-3593-40af-9331-3e703ac467e8","type":"LinearColorMapper"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"83e0fda9-5d7f-4651-bdee-ee665eb61e01","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"801cffcd-2d60-4bb5-8286-9bf95f0ff173","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"9e73fa3c-e125-48d9-911a-f2301fa1eaa2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"},"ticker":{"id":"33f8e864-616b-4291-9094-4dcf3ed70027","type":"CategoricalTicker"}},"id":"2d2eef6a-38ae-48f2-bc63-d8ef406191be","type":"CategoricalAxis"},{"attributes":{"color_mapper":{"id":"5295e3c1-4273-4b88-a1b7-1b2a2a55083b","type":"LinearColorMapper"},"formatter":{"id":"e1f93754-0476-4ab5-8ca0-90fe587415b9","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"},"ticker":{"id":"68b4f8b5-ebd1-46c8-9271-4b49a8966cdd","type":"BasicTicker"}},"id":"03d862c0-a6e1-4fb2-abee-670dcd86538a","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.8, 20.8]","(17.8, 20.8]","(17.8, 20.8]"],"chart_index":[{"POS_ARR_DELAY":"(17.8, 20.8]"},{"POS_ARR_DELAY":"(17.8, 20.8]"},{"POS_ARR_DELAY":"(17.8, 20.8]"}],"values":[19.375,18.6875,20.306818181818183],"x":[7,14,16],"y":["Thursday","Saturday","Saturday"]}},"id":"c050841b-d6d8-472b-8234-3bed98f661a8","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9aa96fb0-8c6e-4193-b1a5-d636ffd3a017","type":"Rect"},{"attributes":{"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"}},"id":"a2e69581-975a-43d0-a175-4dedf377faa3","type":"PanTool"},{"attributes":{"data_source":{"id":"3a6f3524-21f6-400f-8f17-df2bdf0bfe51","type":"ColumnDataSource"},"glyph":{"id":"1933b340-f5f4-4f07-85e6-52fbdc9abdbb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"942b7a8d-0b78-4c15-acb7-55ce2cd9d1dc","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"94708258-de16-4b8c-97bc-299960c8f7e9","type":"ColumnDataSource"},"glyph":{"id":"801cffcd-2d60-4bb5-8286-9bf95f0ff173","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"04a173f7-d9ab-44ef-9294-527a5d6cf108","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"b54070f2-3593-40af-9331-3e703ac467e8","type":"LinearColorMapper"},"formatter":{"id":"11a8ddcc-049f-4225-bf77-cec6131d98d1","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"},"ticker":{"id":"3a31465a-82ed-463b-b306-f7a4eff8df0c","type":"BasicTicker"}},"id":"e1a8a245-007a-462e-8081-35f45d79759e","type":"ColorBar"},{"attributes":{"data_source":{"id":"c050841b-d6d8-472b-8234-3bed98f661a8","type":"ColumnDataSource"},"glyph":{"id":"ac436ff6-20d6-40af-82e4-8d552717e25e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fa70e09a-ce01-4cb5-aa0e-77ad8b2ff2ae","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30f78b61-a5c8-42ae-88bd-e4f4f37c49cc","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"}},"id":"c162399f-66a3-4f63-b54e-e896109ff45b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a2e69581-975a-43d0-a175-4dedf377faa3","type":"PanTool"},{"id":"99ba6c1e-4b42-44a3-a09b-1359adf3a05e","type":"WheelZoomTool"},{"id":"442c1990-5e1f-4c27-9e8f-94e66ec30024","type":"BoxZoomTool"},{"id":"76f3084a-e284-42f3-b63f-3d955fb640c7","type":"SaveTool"},{"id":"260043d3-7515-49ce-b947-cebea39fc4a2","type":"ResetTool"},{"id":"7e7a1430-2445-461b-9820-299bb19ceabb","type":"HelpTool"}]},"id":"37239c7e-28b8-4fd5-8348-757097e4ffd6","type":"Toolbar"},{"attributes":{"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"}},"id":"6abb602d-728b-4c16-a7e1-122199c216dd","type":"ResetTool"},{"attributes":{"data_source":{"id":"f281a293-c23c-4416-8f16-d78635814016","type":"ColumnDataSource"},"glyph":{"id":"c4ed88f0-905d-4e93-a549-88fdeb9406c8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"191294c7-4b23-477a-8d74-4a27b088d17f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"02388faa-0edd-4f8d-a2d6-59cb161baf00","type":"ColumnDataSource"},"glyph":{"id":"3b395601-fe78-4fa5-85e0-4dc8850b862d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"41329d7c-65c6-41ac-80a0-8ebb4dbfbef5","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0f50c0a-47b7-4297-92b0-f2c0523a65e0","type":"Rect"},{"attributes":{"data_source":{"id":"dc63afc5-a3a3-4e09-801b-cdf7a156c931","type":"ColumnDataSource"},"glyph":{"id":"a0f50c0a-47b7-4297-92b0-f2c0523a65e0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"06dbf025-add0-4d34-aec6-7dfa6426ccfb","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"d9d7cb66-8fb1-4d85-a28d-fa978e9ca298","type":"BasicTickFormatter"},"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"},"ticker":{"id":"251a64fc-1b37-4206-aab3-a04ecd744309","type":"BasicTicker"}},"id":"75cd8873-197b-44f4-acaa-5d97c29e2b2f","type":"LinearAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"d677dd07-baa1-4a9c-98fc-fcc61bc40dd9","type":"LinearAxis"}],"left":[{"id":"2d2eef6a-38ae-48f2-bc63-d8ef406191be","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"c4330a6e-f33b-4ff9-a03d-b8a726612f24","type":"BoxAnnotation"},{"id":"41329d7c-65c6-41ac-80a0-8ebb4dbfbef5","type":"GlyphRenderer"},{"id":"50df5f5d-44d1-4ae0-b3d8-4fac9746d49f","type":"GlyphRenderer"},{"id":"8a0b4199-a27c-455b-a015-5f1be456f834","type":"GlyphRenderer"},{"id":"04a173f7-d9ab-44ef-9294-527a5d6cf108","type":"GlyphRenderer"},{"id":"e056c247-24df-40f8-ae18-7c62856fe527","type":"GlyphRenderer"},{"id":"942b7a8d-0b78-4c15-acb7-55ce2cd9d1dc","type":"GlyphRenderer"},{"id":"0db51963-74a4-4728-9701-e2c956859328","type":"GlyphRenderer"},{"id":"06dbf025-add0-4d34-aec6-7dfa6426ccfb","type":"GlyphRenderer"},{"id":"d677dd07-baa1-4a9c-98fc-fcc61bc40dd9","type":"LinearAxis"},{"id":"2d2eef6a-38ae-48f2-bc63-d8ef406191be","type":"CategoricalAxis"},{"id":"e1a8a245-007a-462e-8081-35f45d79759e","type":"ColorBar"}],"right":[{"id":"e1a8a245-007a-462e-8081-35f45d79759e","type":"ColorBar"}],"title":{"id":"83e0fda9-5d7f-4651-bdee-ee665eb61e01","type":"Title"},"tool_events":{"id":"68740e89-16ec-42e6-8c02-e86ce13f321f","type":"ToolEvents"},"toolbar":{"id":"5f642d5f-4cab-469b-81eb-c190b54dc3c7","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"63b49a40-f561-4972-b5ab-f0d7483d1d01","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"30d36ac7-7b63-4726-847f-7eab3309bc65","type":"FactorRange"}},"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"75cd8873-197b-44f4-acaa-5d97c29e2b2f","type":"LinearAxis"}],"left":[{"id":"46429b64-6279-4ace-bb50-0d899e91242a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"30f78b61-a5c8-42ae-88bd-e4f4f37c49cc","type":"BoxAnnotation"},{"id":"8026954f-1d79-44bb-9586-86e4002174d3","type":"GlyphRenderer"},{"id":"fa70e09a-ce01-4cb5-aa0e-77ad8b2ff2ae","type":"GlyphRenderer"},{"id":"191294c7-4b23-477a-8d74-4a27b088d17f","type":"GlyphRenderer"},{"id":"889e964e-09b3-4bb3-97b1-8cbfbff367c4","type":"GlyphRenderer"},{"id":"b12d8595-dfaa-4e08-9744-beccc8e866ef","type":"GlyphRenderer"},{"id":"701963ca-52d5-4d4e-b133-8fb990f5e023","type":"GlyphRenderer"},{"id":"433269e6-0a26-4fd6-b1c0-d48b78f5898d","type":"GlyphRenderer"},{"id":"94c0e8d1-519a-4c07-bdf5-81c366277abe","type":"GlyphRenderer"},{"id":"75cd8873-197b-44f4-acaa-5d97c29e2b2f","type":"LinearAxis"},{"id":"46429b64-6279-4ace-bb50-0d899e91242a","type":"CategoricalAxis"},{"id":"03d862c0-a6e1-4fb2-abee-670dcd86538a","type":"ColorBar"}],"right":[{"id":"03d862c0-a6e1-4fb2-abee-670dcd86538a","type":"ColorBar"}],"title":{"id":"8615697b-b473-422d-81b9-faf1d88cb2fc","type":"Title"},"tool_events":{"id":"c7deabcf-d01f-4a54-a694-2ebcf720aaea","type":"ToolEvents"},"toolbar":{"id":"37239c7e-28b8-4fd5-8348-757097e4ffd6","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b3037d85-7308-4d00-b60e-d33dc6be6395","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0cd9725c-c5d1-4e81-a987-40234feffe94","type":"FactorRange"}},"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6144da63-454b-48ef-88e6-2b481fafd9a7","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0d120979-00f6-4aea-9c29-72a02c92da07","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"},"ticker":{"id":"8f734244-ff93-4a9f-8464-185f6c237dc3","type":"CategoricalTicker"}},"id":"46429b64-6279-4ace-bb50-0d899e91242a","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"}},"id":"76f3084a-e284-42f3-b63f-3d955fb640c7","type":"SaveTool"},{"attributes":{},"id":"0d120979-00f6-4aea-9c29-72a02c92da07","type":"CategoricalTickFormatter"},{"attributes":{},"id":"031d0fd8-0d93-4bb5-aac4-bbb0766c5e9d","type":"BasicTicker"},{"attributes":{},"id":"8f734244-ff93-4a9f-8464-185f6c237dc3","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]"],"chart_index":[{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"}],"values":[7.885714285714286,7.275862068965517,7.4523809523809526,7.517241379310345,6.206896551724138,7.243243243243243,6.178571428571429,6.815789473684211,7.074074074074074,8.11111111111111,7.456140350877193,7.732142857142857],"x":[14,18,6,18,18,14,18,14,16,5,16,17],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"a9c1f03e-416d-4e39-8cec-9072c6c841d8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]","(11.9, 14.9]"],"chart_index":[{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"},{"POS_ARR_DELAY":"(11.9, 14.9]"}],"values":[14.090909090909092,13.0,14.25,12.067796610169491,13.58695652173913,14.166666666666666,13.545454545454545],"x":[16,17,12,17,15,18,14],"y":["Monday","Wednesday","Thursday","Thursday","Saturday","Saturday","Sunday"]}},"id":"94708258-de16-4b8c-97bc-299960c8f7e9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"177e3b1e-0c0a-4c46-b31d-a7f0ef70f096","type":"ColumnDataSource"},"glyph":{"id":"65953efb-4177-4a89-9fab-b2479d5e181d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e056c247-24df-40f8-ae18-7c62856fe527","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.8, 20.8]","(17.8, 20.8]","(17.8, 20.8]"],"chart_index":[{"POS_ARR_DELAY":"(17.8, 20.8]"},{"POS_ARR_DELAY":"(17.8, 20.8]"},{"POS_ARR_DELAY":"(17.8, 20.8]"}],"values":[19.375,18.6875,20.306818181818183],"x":[7,14,16],"y":["Thursday","Saturday","Saturday"]}},"id":"dc6ff3e3-8ed5-4ebe-a225-f3facf10f6d9","type":"ColumnDataSource"},{"attributes":{"child":{"id":"2879336e-512b-439c-923a-fc04a4473e21","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"1efdc0e3-b0f9-4eef-ad2b-851cadb49f71","type":"Panel"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2370a8d0-f01b-40b8-99e5-6ef0fdfa41a1","type":"BasicTickFormatter"},"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"},"ticker":{"id":"031d0fd8-0d93-4bb5-aac4-bbb0766c5e9d","type":"BasicTicker"}},"id":"d677dd07-baa1-4a9c-98fc-fcc61bc40dd9","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa931c74-f37c-40e1-9269-387b5b20b816","type":"Rect"},{"attributes":{"data_source":{"id":"206a835a-c4d1-44c0-9a90-28302c18fce9","type":"ColumnDataSource"},"glyph":{"id":"fa931c74-f37c-40e1-9269-387b5b20b816","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"433269e6-0a26-4fd6-b1c0-d48b78f5898d","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"30d36ac7-7b63-4726-847f-7eab3309bc65","type":"FactorRange"},{"attributes":{},"id":"68b4f8b5-ebd1-46c8-9271-4b49a8966cdd","type":"BasicTicker"},{"attributes":{},"id":"2370a8d0-f01b-40b8-99e5-6ef0fdfa41a1","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]","(8.9, 11.9]"],"chart_index":[{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"},{"POS_ARR_DELAY":"(8.9, 11.9]"}],"values":[10.982456140350877,9.36111111111111,9.3,9.108108108108109,10.594594594594595,9.6,11.736842105263158,10.074074074074074,9.0],"x":[17,14,17,14,13,17,7,13,19],"y":["Monday","Tuesday","Tuesday","Wednesday","Friday","Friday","Saturday","Saturday","Sunday"]}},"id":"531baa69-b371-4f11-bc45-15ac7581153d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e111ef5b-457b-419b-bcc7-8223693c3461","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"0cd9725c-c5d1-4e81-a987-40234feffe94","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c162399f-66a3-4f63-b54e-e896109ff45b","type":"PanTool"},{"id":"dbdbccf6-b777-4ae7-8b8c-7625761811f5","type":"WheelZoomTool"},{"id":"6692de0a-6d15-4269-8210-853a53a34623","type":"BoxZoomTool"},{"id":"611eceec-007e-449f-b43c-e73f730dce63","type":"SaveTool"},{"id":"6abb602d-728b-4c16-a7e1-122199c216dd","type":"ResetTool"},{"id":"05df6f32-11d0-41e5-b99f-27f0518b269a","type":"HelpTool"}]},"id":"5f642d5f-4cab-469b-81eb-c190b54dc3c7","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]","[-0.03, 3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"},{"POS_ARR_DELAY":"[-0.03, 3]"}],"values":[0.35714285714285715,0.0,0.0,2.875,0.0,1.0,0.0,0.0,2.825,0.0,0.0,0.9473684210526315,0.2222222222222222,0.75,2.6296296296296298,0.5714285714285714,0.0,1.75,0.0,0.0],"x":[7,9,11,7,11,12,11,15,6,15,9,10,11,12,6,7,8,10,11,12],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday","Sunday","Sunday"]}},"id":"284f4b3c-1052-4b6b-9d4d-60d507ad3b38","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a9c1f03e-416d-4e39-8cec-9072c6c841d8","type":"ColumnDataSource"},"glyph":{"id":"01b91922-f2e5-4328-ba22-cb2b6f04ed47","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"701963ca-52d5-4d4e-b133-8fb990f5e023","type":"GlyphRenderer"},{"attributes":{},"id":"251a64fc-1b37-4206-aab3-a04ecd744309","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]","(3, 5.9]"],"chart_index":[{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"},{"POS_ARR_DELAY":"(3, 5.9]"}],"values":[5.075,5.666666666666667,4.666666666666667,4.5636363636363635,3.0714285714285716,3.2941176470588234,5.166666666666667,5.5636363636363635,5.796296296296297,3.951219512195122,3.823529411764706,4.514285714285714,5.447368421052632],"x":[6,12,13,16,6,7,12,16,16,6,7,6,13],"y":["Monday","Monday","Monday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Sunday"]}},"id":"206a835a-c4d1-44c0-9a90-28302c18fce9","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac436ff6-20d6-40af-82e4-8d552717e25e","type":"Rect"},{"attributes":{"data_source":{"id":"9c715940-b8d9-4fdf-9620-4f9459aa1d92","type":"ColumnDataSource"},"glyph":{"id":"64b6c7a6-30c7-447c-9551-dbd4c5bf95c4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8a0b4199-a27c-455b-a015-5f1be456f834","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.8, 26.7]","(23.8, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.8, 26.7]"},{"POS_ARR_DELAY":"(23.8, 26.7]"}],"values":[26.6,26.733333333333334],"x":[17,18],"y":["Saturday","Sunday"]}},"id":"02388faa-0edd-4f8d-a2d6-59cb161baf00","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c4330a6e-f33b-4ff9-a03d-b8a726612f24","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"211b9c8e-0c9f-4443-b862-76e61d344a35","type":"ColumnDataSource"},"glyph":{"id":"9aa96fb0-8c6e-4193-b1a5-d636ffd3a017","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"889e964e-09b3-4bb3-97b1-8cbfbff367c4","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"51d6e20f-e8bf-4864-a150-cf505aa836b9","type":"ColumnDataSource"},"glyph":{"id":"e111ef5b-457b-419b-bcc7-8223693c3461","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0db51963-74a4-4728-9701-e2c956859328","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"65953efb-4177-4a89-9fab-b2479d5e181d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]","(5.9, 8.9]"],"chart_index":[{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"},{"POS_ARR_DELAY":"(5.9, 8.9]"}],"values":[7.885714285714286,7.275862068965517,7.4523809523809526,7.517241379310345,6.206896551724138,7.243243243243243,6.178571428571429,6.815789473684211,7.074074074074074,8.11111111111111,7.456140350877193,7.732142857142857],"x":[14,18,6,18,18,14,18,14,16,5,16,17],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"3a6f3524-21f6-400f-8f17-df2bdf0bfe51","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c4ed88f0-905d-4e93-a549-88fdeb9406c8","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1933b340-f5f4-4f07-85e6-52fbdc9abdbb","type":"Rect"},{"attributes":{},"id":"11a8ddcc-049f-4225-bf77-cec6131d98d1","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b395601-fe78-4fa5-85e0-4dc8850b862d","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"8615697b-b473-422d-81b9-faf1d88cb2fc","type":"Title"},{"attributes":{"overlay":{"id":"c4330a6e-f33b-4ff9-a03d-b8a726612f24","type":"BoxAnnotation"},"plot":{"id":"f182adbd-7571-4a2b-b1f5-78b65f94d200","subtype":"Chart","type":"Plot"}},"id":"6692de0a-6d15-4269-8210-853a53a34623","type":"BoxZoomTool"}],"root_ids":["db96c45d-80d4-492d-8412-2b454d8512ec"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"2db4ef83-66c6-4480-af43-8d7f7d46ea79","elementid":"d24cf835-99ce-4c24-a444-9934069bce13","modelid":"db96c45d-80d4-492d-8412-2b454d8512ec"}];
                  
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