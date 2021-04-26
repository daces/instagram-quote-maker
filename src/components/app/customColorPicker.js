
import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '100%',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          width: "100%",
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div style={{ "width": "100%"}}>
        <div style={ styles.swatch } onClick={() => this.handleClick()} onKeyUp={this.handleKeyUp} role="button" tabIndex={0} aria-label="Show color Picker">
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={() => this.handleClose() } onKeyUp={this.handleKeyUp} role="button" tabIndex={-1} aria-label="Show color Picker"/>
          <SketchPicker color={ this.state.color } onChange={() => this.handleChange() } onKeyUp={this.handleKeyUp} role="button" tabIndex={-2} aria-label="Mute volume"/>
        </div> : null }

      </div>
    )
  }
}

export default SketchExample