import React from 'react';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';

const LightItem = (props) => (
      <div className="items">
         <div className="item toggle">
         <Toggle
            toggled={props.isOn} label={props.name} 
            onToggle={() => props.onToggleLight(props.id,props.isOn)}
            disabled={!props.reachable}
         />
         {props.reachable ? "" : <div className="not_reachable_warning">not reachable</div>}
         </div>
         <div className="item slider">
         <Slider
            disabled={!props.reachable}
            min={0}
            max={255}
            step={1}
            value={props.bri}
            onChange={(object,newValue) => props.onBrightnessChanged(props.id,newValue)}     
         />
         </div>
      </div>
   );

export default LightItem;