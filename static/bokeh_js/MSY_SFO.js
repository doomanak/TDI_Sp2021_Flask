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
      };var element = document.getElementById("a05dc21b-39b5-4f2b-a3fa-4e8a01d6ac3f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a05dc21b-39b5-4f2b-a3fa-4e8a01d6ac3f' but no matching script tag was found. ")
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
                  var docs_json = {"f97ccfe0-78e8-47c1-b29b-e8da35760fb1":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd18b78b-1649-4bb8-9a0b-e5f7691a9f39","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f9cf54bb-10d6-4bc6-ae65-c161f3a8e642","type":"Rect"},{"attributes":{"data_source":{"id":"57bc1067-eeb9-4811-b6c4-7b9ebcfd45b8","type":"ColumnDataSource"},"glyph":{"id":"f9cf54bb-10d6-4bc6-ae65-c161f3a8e642","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1cf67790-c929-4fba-84a4-41dce425d580","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.0,22.0,22.8,20.875],"x":[14,19,9,19],"y":["Tuesday","Wednesday","Friday","Sunday"]}},"id":"9922dc2f-70eb-4fc9-88ae-f12956124e49","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"}},"id":"8b4a15ef-e643-4763-82eb-eaeaa81efd8f","type":"ResetTool"},{"attributes":{"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"}},"id":"d185c26f-03d0-423c-adf7-61c5f785e7f3","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d18437c-9662-4eb6-bb5b-7073df9cf48a","type":"Rect"},{"attributes":{},"id":"84ddaa12-ba20-4baf-bcc4-b40a5a8afaba","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"}},"id":"d0ef7e44-819c-49ea-9de2-3e974656742d","type":"SaveTool"},{"attributes":{"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"}},"id":"c1892574-8fe6-4bfd-b123-0bb3525d88c1","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4229e030-b848-43f7-a99b-fc28697be3be","type":"Rect"},{"attributes":{"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"}},"id":"4a88eefd-10a1-457a-848e-36bf577ffa1b","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"e7547c18-3a6a-4182-a14c-ce0f61b5cbb7","type":"ColumnDataSource"},"glyph":{"id":"af3f1cc7-1be3-4fe2-a529-bafbf3a870f4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b5a3e63b-a066-4fb6-80fa-5dc21f4385cc","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b6c73be-65d5-4ac3-9b27-01e968d501ad","type":"Rect"},{"attributes":{"data_source":{"id":"35d30e72-df95-4d93-a37b-f14c6f7b5021","type":"ColumnDataSource"},"glyph":{"id":"380da98f-bed9-4209-8ba1-adc83d2d2734","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"762f4656-3b2e-4662-9068-6208d18e0cc2","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"9cbc1e9f-11c9-4c0d-8f63-7ecc7be6aada","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"},"ticker":{"id":"8c4c250f-0aec-410d-b132-db2b68520df7","type":"CategoricalTicker"}},"id":"5bd99942-ea4c-47dc-b782-af50ab75957c","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"047d2a40-5063-443c-9f2b-a039bee5ce41","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"84ddaa12-ba20-4baf-bcc4-b40a5a8afaba","type":"BasicTickFormatter"},"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"},"ticker":{"id":"f1e535ac-a720-4d37-baad-1c6ea9daa1cf","type":"BasicTicker"}},"id":"9c46af60-f694-4454-a6ec-27a355e2fafa","type":"LinearAxis"},{"attributes":{"overlay":{"id":"ca623814-7be8-426f-8c30-a9b8a2ad2387","type":"BoxAnnotation"},"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"}},"id":"69b278a4-65a9-47c7-9843-49b5ee034a21","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,28.0],"x":[18,16,17,19,6],"y":["Monday","Wednesday","Friday","Friday","Sunday"]}},"id":"0d1b26ab-6c7b-43af-a8a7-d0ab37c0ffe3","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"d7929895-a46c-4b52-9fcc-90d92822fa33","type":"LinearColorMapper"},"formatter":{"id":"aef75a3b-c10d-4574-9d55-b93ad999d2aa","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"},"ticker":{"id":"f00b1522-0154-412b-abb0-26e114821b10","type":"BasicTicker"}},"id":"291bf6e6-3205-4a98-a817-f085ead35853","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1fd9f3cb-6518-4705-aba5-1175c002f7f5","type":"Rect"},{"attributes":{},"id":"800ca0df-4f73-419e-823c-61235b071de0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.122448979591837,17.0,18.333333333333332],"x":[17,16,18],"y":["Thursday","Friday","Sunday"]}},"id":"e62c9a1f-4302-4213-b009-82beec977069","type":"ColumnDataSource"},{"attributes":{},"id":"aef75a3b-c10d-4574-9d55-b93ad999d2aa","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3d139ae4-1945-4009-b2e6-750557db3f56","type":"ColumnDataSource"},"glyph":{"id":"1b7a6c4a-c321-4134-9dc0-50341575c3d8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"858f94a1-bb58-4022-b8b1-593ea2bb8fe8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.693877551020407,25.0,26.647058823529413],"x":[17,19,18],"y":["Wednesday","Thursday","Friday"]}},"id":"57bc1067-eeb9-4811-b6c4-7b9ebcfd45b8","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d7929895-a46c-4b52-9fcc-90d92822fa33","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"e2de53f9-bc81-4aa4-98a5-2e6436d7831d","type":"ColumnDataSource"},"glyph":{"id":"047d2a40-5063-443c-9f2b-a039bee5ce41","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2f5a4cc-703d-40bb-8aea-40fa039044dc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.029411764705882,11.288461538461538,10.75],"x":[17,18,14],"y":["Tuesday","Wednesday","Friday"]}},"id":"57ba23a3-49af-414d-a87c-72fda93d3592","type":"ColumnDataSource"},{"attributes":{},"id":"f1e535ac-a720-4d37-baad-1c6ea9daa1cf","type":"BasicTicker"},{"attributes":{},"id":"bf2905b8-4d58-477c-b05e-42bda4f6013a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[6.8,7.5,7.017543859649122],"x":[19,14,18],"y":["Monday","Thursday","Saturday"]}},"id":"e34edcfd-6751-4d27-925e-9cc216933ec7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"57ba23a3-49af-414d-a87c-72fda93d3592","type":"ColumnDataSource"},"glyph":{"id":"cd7bd7ff-1ec0-451b-a77c-4ee2e8e0e910","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"80bd6f73-4589-4bef-8a40-838edc2f2f7f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.122448979591837,17.0,18.333333333333332],"x":[17,16,18],"y":["Thursday","Friday","Sunday"]}},"id":"dbc2c788-b7be-4f30-a9fe-149158acf4a8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"378b9deb-dbaa-4f80-9159-03e7019345f1","type":"ColumnDataSource"},"glyph":{"id":"6d18437c-9662-4eb6-bb5b-7073df9cf48a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1122a4e4-8264-45a8-b8da-e37d77c55d76","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.431372549019608,13.81132075471698,16.555555555555557,13.75,15.803921568627452,16.454545454545453,15.78048780487805],"x":[17,18,19,16,18,17,17],"y":["Monday","Tuesday","Tuesday","Thursday","Thursday","Saturday","Sunday"]}},"id":"3e2a3710-45b5-4b65-8f72-ee2ec6b8826d","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"bf2905b8-4d58-477c-b05e-42bda4f6013a","type":"BasicTickFormatter"},"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"},"ticker":{"id":"800ca0df-4f73-419e-823c-61235b071de0","type":"BasicTicker"}},"id":"e4b9171a-afa4-457b-8cce-9f117f8b7c7a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.75,0.75,0.0,2.2,0.0,0.0,1.2,0.0,0.0,1.5555555555555556,0.0,0.0],"x":[14,16,9,16,9,21,9,9,16,7,14,16],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"95663afb-d899-4cf9-851a-648435d90726","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.75,0.75,0.0,2.2,0.0,0.0,1.2,0.0,0.0,1.5555555555555556,0.0,0.0],"x":[14,16,9,16,9,21,9,9,16,7,14,16],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"6231c55a-e81e-4c5b-80a4-1b7c6be2f3ae","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"be34b25b-3dd4-44e8-9fc6-ce6fec43e2df","type":"PanTool"},{"id":"aee7a4cd-2797-49ab-aa18-ad41b9420023","type":"WheelZoomTool"},{"id":"69b278a4-65a9-47c7-9843-49b5ee034a21","type":"BoxZoomTool"},{"id":"d0ef7e44-819c-49ea-9de2-3e974656742d","type":"SaveTool"},{"id":"a8fc9da8-87af-48b8-8695-9b5c62facf77","type":"ResetTool"},{"id":"c1892574-8fe6-4bfd-b123-0bb3525d88c1","type":"HelpTool"}]},"id":"30d498de-96fa-4a14-bba4-2646d8cd2255","type":"Toolbar"},{"attributes":{"data_source":{"id":"a5a34445-9532-469c-94da-cd65cbd75cc2","type":"ColumnDataSource"},"glyph":{"id":"cd18b78b-1649-4bb8-9a0b-e5f7691a9f39","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9fe0225e-b639-41fc-91fb-9c8c19c21ae8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"}},"id":"aee7a4cd-2797-49ab-aa18-ad41b9420023","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"e62c9a1f-4302-4213-b009-82beec977069","type":"ColumnDataSource"},"glyph":{"id":"5b6c73be-65d5-4ac3-9b27-01e968d501ad","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0d29fabe-cd31-43e6-9f05-9f271fdd5f2d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed5c4e22-c3d3-48de-8cec-96df6bc9e1bf","type":"Rect"},{"attributes":{},"id":"11b23e09-a851-485d-9b59-8afbf9276174","type":"ToolEvents"},{"attributes":{"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"}},"id":"a8fc9da8-87af-48b8-8695-9b5c62facf77","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b7a6c4a-c321-4134-9dc0-50341575c3d8","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"790423f6-a2e1-4d8d-8e0a-76a753c8ef91","type":"Rect"},{"attributes":{},"id":"d1d422b2-6b08-4f3e-a1d4-110127f46376","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.0,22.0,22.8,20.875],"x":[14,19,9,19],"y":["Tuesday","Wednesday","Friday","Sunday"]}},"id":"3aa1a739-f5eb-47b1-97c6-2c7ff3d7b1d9","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"062876ec-d84d-4db0-b0e3-244ba434503d","type":"FactorRange"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"9291c461-bac8-4f59-a002-900be43c05b4","type":"FactorRange"},{"attributes":{"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"}},"id":"b83f9899-6fcd-47dd-9138-240507740f3c","type":"HelpTool"},{"attributes":{"data_source":{"id":"6231c55a-e81e-4c5b-80a4-1b7c6be2f3ae","type":"ColumnDataSource"},"glyph":{"id":"1fd9f3cb-6518-4705-aba5-1175c002f7f5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8abd5147-3e10-4b81-822f-8cbf0eebce2b","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e4b9171a-afa4-457b-8cce-9f117f8b7c7a","type":"LinearAxis"}],"left":[{"id":"2898787c-18de-4633-8be0-5d35032eea6f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"2a16062e-eaf6-48b1-a83d-6defcb157a0f","type":"BoxAnnotation"},{"id":"e61c90ae-4b50-409f-a400-e25439edb920","type":"GlyphRenderer"},{"id":"1cf67790-c929-4fba-84a4-41dce425d580","type":"GlyphRenderer"},{"id":"71073394-01c2-4ffb-a05e-c1ce92530b31","type":"GlyphRenderer"},{"id":"0d29fabe-cd31-43e6-9f05-9f271fdd5f2d","type":"GlyphRenderer"},{"id":"b2f5a4cc-703d-40bb-8aea-40fa039044dc","type":"GlyphRenderer"},{"id":"80bd6f73-4589-4bef-8a40-838edc2f2f7f","type":"GlyphRenderer"},{"id":"1122a4e4-8264-45a8-b8da-e37d77c55d76","type":"GlyphRenderer"},{"id":"762f4656-3b2e-4662-9068-6208d18e0cc2","type":"GlyphRenderer"},{"id":"8abd5147-3e10-4b81-822f-8cbf0eebce2b","type":"GlyphRenderer"},{"id":"e4b9171a-afa4-457b-8cce-9f117f8b7c7a","type":"LinearAxis"},{"id":"2898787c-18de-4633-8be0-5d35032eea6f","type":"CategoricalAxis"},{"id":"cb06954e-4fc8-4c4b-9d4c-4ad13169dbae","type":"ColorBar"}],"right":[{"id":"cb06954e-4fc8-4c4b-9d4c-4ad13169dbae","type":"ColorBar"}],"title":{"id":"9d972e3c-9260-4a03-b357-0d3177efbecd","type":"Title"},"tool_events":{"id":"11b23e09-a851-485d-9b59-8afbf9276174","type":"ToolEvents"},"toolbar":{"id":"c805b8c6-2e1d-4d62-85ad-0585b933c344","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ea16f2f0-7a1a-4f9c-9407-7d2a5988c37a","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"9291c461-bac8-4f59-a002-900be43c05b4","type":"FactorRange"}},"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"f7c8bc14-6841-464c-b365-680e2a8fa969","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d1987e1-2152-40d1-8b94-e4beecd53cef","type":"Rect"},{"attributes":{},"id":"9cbc1e9f-11c9-4c0d-8f63-7ecc7be6aada","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d675aa10-e666-4818-8a87-00aab43855fb","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.2,3.4],"x":[9,9],"y":["Monday","Sunday"]}},"id":"3d139ae4-1945-4009-b2e6-750557db3f56","type":"ColumnDataSource"},{"attributes":{"child":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"b20e3340-5190-4a85-8e45-d0bdb9ba4a8e","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"b0bd13eb-2aaf-42f6-b3f2-f3da72f89ebc","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bdf50078-939a-452f-95ab-a39743c84164","type":"Rect"},{"attributes":{"child":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"e9ed2a5c-8425-457f-9440-706c7854a96e","type":"Panel"},{"attributes":{"overlay":{"id":"2a16062e-eaf6-48b1-a83d-6defcb157a0f","type":"BoxAnnotation"},"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"}},"id":"a813de1b-1dc1-4b99-8906-814149554f90","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,28.0],"x":[18,16,17,19,6],"y":["Monday","Wednesday","Friday","Friday","Sunday"]}},"id":"b4bde3a8-e9d9-43d5-b54e-c83e665fa232","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f40e0202-93b1-4879-9d4b-fce49a183c9f","type":"Rect"},{"attributes":{},"id":"48d8a814-faba-4de4-ac3a-0c9f3cbf1002","type":"BasicTicker"},{"attributes":{"data_source":{"id":"dbc2c788-b7be-4f30-a9fe-149158acf4a8","type":"ColumnDataSource"},"glyph":{"id":"6d1987e1-2152-40d1-8b94-e4beecd53cef","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3f2c2e2b-e638-4dfc-bb78-1b43ab9b4409","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"}},"id":"64a1f539-e47c-4ed1-81bc-023f6eace207","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.693877551020407,25.0,26.647058823529413],"x":[17,19,18],"y":["Wednesday","Thursday","Friday"]}},"id":"a5a34445-9532-469c-94da-cd65cbd75cc2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"}},"id":"be34b25b-3dd4-44e8-9fc6-ce6fec43e2df","type":"PanTool"},{"attributes":{"data_source":{"id":"b4bde3a8-e9d9-43d5-b54e-c83e665fa232","type":"ColumnDataSource"},"glyph":{"id":"6692f204-7549-43f6-9c90-fe5f3bb4c50c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5254d8dd-48ba-449a-b482-83820db57cfe","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca623814-7be8-426f-8c30-a9b8a2ad2387","type":"BoxAnnotation"},{"attributes":{"callback":null,"tabs":[{"id":"e9ed2a5c-8425-457f-9440-706c7854a96e","type":"Panel"},{"id":"b20e3340-5190-4a85-8e45-d0bdb9ba4a8e","type":"Panel"}]},"id":"e36e4828-f90e-4dd3-9481-6801baa39225","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.2,3.4],"x":[9,9],"y":["Monday","Sunday"]}},"id":"35d30e72-df95-4d93-a37b-f14c6f7b5021","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"298d58a8-67fd-4d0e-98b2-36a4214650a1","type":"LinearColorMapper"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2a16062e-eaf6-48b1-a83d-6defcb157a0f","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"e34edcfd-6751-4d27-925e-9cc216933ec7","type":"ColumnDataSource"},"glyph":{"id":"790423f6-a2e1-4d8d-8e0a-76a753c8ef91","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"31aa80df-451b-48b3-89ab-08c1736c7fe5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3aa1a739-f5eb-47b1-97c6-2c7ff3d7b1d9","type":"ColumnDataSource"},"glyph":{"id":"d675aa10-e666-4818-8a87-00aab43855fb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"71073394-01c2-4ffb-a05e-c1ce92530b31","type":"GlyphRenderer"},{"attributes":{},"id":"3e3a9e19-e9b1-49a1-8657-62739378597a","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd7bd7ff-1ec0-451b-a77c-4ee2e8e0e910","type":"Rect"},{"attributes":{"data_source":{"id":"9922dc2f-70eb-4fc9-88ae-f12956124e49","type":"ColumnDataSource"},"glyph":{"id":"bdf50078-939a-452f-95ab-a39743c84164","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c9528c9d-4671-4eb5-862f-0f716c863776","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6692f204-7549-43f6-9c90-fe5f3bb4c50c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[6.8,7.5,7.017543859649122],"x":[19,14,18],"y":["Monday","Thursday","Saturday"]}},"id":"378b9deb-dbaa-4f80-9159-03e7019345f1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3e2a3710-45b5-4b65-8f72-ee2ec6b8826d","type":"ColumnDataSource"},"glyph":{"id":"4229e030-b848-43f7-a99b-fc28697be3be","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"39926087-71ff-439d-8d5a-c435fedd6e82","type":"GlyphRenderer"},{"attributes":{},"id":"8c4c250f-0aec-410d-b132-db2b68520df7","type":"CategoricalTicker"},{"attributes":{},"id":"c886be19-dcfb-4d1c-9975-aa20f4cfade6","type":"ToolEvents"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"3e3a9e19-e9b1-49a1-8657-62739378597a","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"},"ticker":{"id":"d1d422b2-6b08-4f3e-a1d4-110127f46376","type":"CategoricalTicker"}},"id":"2898787c-18de-4633-8be0-5d35032eea6f","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":23},"id":"ea16f2f0-7a1a-4f9c-9407-7d2a5988c37a","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.431372549019608,13.81132075471698,16.555555555555557,13.75,15.803921568627452,16.454545454545453,15.78048780487805],"x":[17,18,19,16,18,17,17],"y":["Monday","Tuesday","Tuesday","Thursday","Thursday","Saturday","Sunday"]}},"id":"e2de53f9-bc81-4aa4-98a5-2e6436d7831d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"af3f1cc7-1be3-4fe2-a529-bafbf3a870f4","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"9c46af60-f694-4454-a6ec-27a355e2fafa","type":"LinearAxis"}],"left":[{"id":"5bd99942-ea4c-47dc-b782-af50ab75957c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ca623814-7be8-426f-8c30-a9b8a2ad2387","type":"BoxAnnotation"},{"id":"5254d8dd-48ba-449a-b482-83820db57cfe","type":"GlyphRenderer"},{"id":"9fe0225e-b639-41fc-91fb-9c8c19c21ae8","type":"GlyphRenderer"},{"id":"c9528c9d-4671-4eb5-862f-0f716c863776","type":"GlyphRenderer"},{"id":"3f2c2e2b-e638-4dfc-bb78-1b43ab9b4409","type":"GlyphRenderer"},{"id":"39926087-71ff-439d-8d5a-c435fedd6e82","type":"GlyphRenderer"},{"id":"b5a3e63b-a066-4fb6-80fa-5dc21f4385cc","type":"GlyphRenderer"},{"id":"31aa80df-451b-48b3-89ab-08c1736c7fe5","type":"GlyphRenderer"},{"id":"858f94a1-bb58-4022-b8b1-593ea2bb8fe8","type":"GlyphRenderer"},{"id":"c84b16de-8aa0-4470-8892-0b802e95e6df","type":"GlyphRenderer"},{"id":"9c46af60-f694-4454-a6ec-27a355e2fafa","type":"LinearAxis"},{"id":"5bd99942-ea4c-47dc-b782-af50ab75957c","type":"CategoricalAxis"},{"id":"291bf6e6-3205-4a98-a817-f085ead35853","type":"ColorBar"}],"right":[{"id":"291bf6e6-3205-4a98-a817-f085ead35853","type":"ColorBar"}],"title":{"id":"f4e27681-8ae4-4d2a-ac67-5c6db9d798dd","type":"Title"},"tool_events":{"id":"c886be19-dcfb-4d1c-9975-aa20f4cfade6","type":"ToolEvents"},"toolbar":{"id":"30d498de-96fa-4a14-bba4-2646d8cd2255","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b0bd13eb-2aaf-42f6-b3f2-f3da72f89ebc","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"062876ec-d84d-4db0-b0e3-244ba434503d","type":"FactorRange"}},"id":"daf700aa-b245-46e2-bedf-c9b4acc1c40b","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"0d1b26ab-6c7b-43af-a8a7-d0ab37c0ffe3","type":"ColumnDataSource"},"glyph":{"id":"f40e0202-93b1-4879-9d4b-fce49a183c9f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e61c90ae-4b50-409f-a400-e25439edb920","type":"GlyphRenderer"},{"attributes":{},"id":"f00b1522-0154-412b-abb0-26e114821b10","type":"BasicTicker"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"f4e27681-8ae4-4d2a-ac67-5c6db9d798dd","type":"Title"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"9d972e3c-9260-4a03-b357-0d3177efbecd","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.029411764705882,11.288461538461538,10.75],"x":[17,18,14],"y":["Tuesday","Wednesday","Friday"]}},"id":"e7547c18-3a6a-4182-a14c-ce0f61b5cbb7","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d185c26f-03d0-423c-adf7-61c5f785e7f3","type":"PanTool"},{"id":"4a88eefd-10a1-457a-848e-36bf577ffa1b","type":"WheelZoomTool"},{"id":"a813de1b-1dc1-4b99-8906-814149554f90","type":"BoxZoomTool"},{"id":"64a1f539-e47c-4ed1-81bc-023f6eace207","type":"SaveTool"},{"id":"8b4a15ef-e643-4763-82eb-eaeaa81efd8f","type":"ResetTool"},{"id":"b83f9899-6fcd-47dd-9138-240507740f3c","type":"HelpTool"}]},"id":"c805b8c6-2e1d-4d62-85ad-0585b933c344","type":"Toolbar"},{"attributes":{"color_mapper":{"id":"298d58a8-67fd-4d0e-98b2-36a4214650a1","type":"LinearColorMapper"},"formatter":{"id":"f7c8bc14-6841-464c-b365-680e2a8fa969","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"4b1624e5-8520-44e6-bb3b-7d09f87e8b49","subtype":"Chart","type":"Plot"},"ticker":{"id":"48d8a814-faba-4de4-ac3a-0c9f3cbf1002","type":"BasicTicker"}},"id":"cb06954e-4fc8-4c4b-9d4c-4ad13169dbae","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"380da98f-bed9-4209-8ba1-adc83d2d2734","type":"Rect"},{"attributes":{"data_source":{"id":"95663afb-d899-4cf9-851a-648435d90726","type":"ColumnDataSource"},"glyph":{"id":"ed5c4e22-c3d3-48de-8cec-96df6bc9e1bf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c84b16de-8aa0-4470-8892-0b802e95e6df","type":"GlyphRenderer"}],"root_ids":["e36e4828-f90e-4dd3-9481-6801baa39225"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"f97ccfe0-78e8-47c1-b29b-e8da35760fb1","elementid":"a05dc21b-39b5-4f2b-a3fa-4e8a01d6ac3f","modelid":"e36e4828-f90e-4dd3-9481-6801baa39225"}];
                  
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