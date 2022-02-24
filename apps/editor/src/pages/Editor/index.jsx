import grapesjs from 'grapesjs'
import { useLayoutEffect, useState } from 'react'
import { withAuthWrapper } from '@/hoc/WithAuth'

const Editor = () => {
  const [editor, setEditor] = useState(null)

  useLayoutEffect(() => {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '300px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      plugins: ['gjs-preset-webpage'],
      // Avoid any default panel
      panels: {
        defaults: [
          // ...
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [{
              id: 'show-layers',
              active: true,
              label: 'Layers',
              command: 'show-layers',
              // Once activated disable the possibility to turn it off
              togglable: false
            }, {
              id: 'show-style',
              active: true,
              label: 'Styles',
              command: 'show-styles',
              togglable: false
            }]
          }
        ]
      },

      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: '<b>Section</b>',
            attributes: {
              class: 'gjs-block-section'
            },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`
          },
          {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>'
          },
          {
            id: 'image',
            label: 'Image',
            select: true,
            content: {
              type: 'image'
            },
            activate: true
          }
        ]
      },

      layerManager: {
        appendTo: '.layers-container'
      },

      selectorManager: {
        appendTo: '.styles-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
          name: 'Dimension',
          open: false,
          // Use built-in properties
          buildProps: ['width', 'min-height', 'padding'],
          // Use `properties` to define/override single property
          properties: [
            {
              // Type of the input,
              // options: integer | radio | select | color | slider | file | composite | stack
              type: 'integer',
              name: 'The width', // Label for the property
              property: 'width', // CSS property (if buildProps contains it will be extended)
              units: ['px', '%'], // Units, available only for 'integer' types
              defaults: 'auto', // Default value
              min: 0 // Min value, available only for 'integer' types
            }
          ]
        }, {
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [
            {
              id: 'custom-prop',
              name: 'Custom Label',
              property: 'font-size',
              type: 'select',
              defaults: '32px',
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { value: '12px', name: 'Tiny' },
                { value: '18px', name: 'Medium' },
                { value: '32px', name: 'Big' }
              ]
            }
          ]
        }]
      }
    })

    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top'
    })
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility' // Built-in command
        },
        {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template' // For grouping context of buttons from the same panel
        },
        {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command (editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`)
              .open()
          }
        }
      ]
    })

    // Define commands
    editor.Commands.add('show-layers', {
      getRowEl (editor) { return editor.getContainer().closest('.editor-row') },
      getLayersEl (row) { return row.querySelector('.layers-container') },

      run (editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor))
        lmEl.style.display = ''
      },
      stop (editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor))
        lmEl.style.display = 'none'
      }
    })
    editor.Commands.add('show-styles', {
      getRowEl (editor) { return editor.getContainer().closest('.editor-row') },
      getStyleEl (row) { return row.querySelector('.styles-container') },

      run (editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor))
        smEl.style.display = ''
      },
      stop (editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor))
        smEl.style.display = 'none'
      }
    })

    setEditor(editor)
  }, [])

  return (
    <div>
      <h1>Editor</h1>
      <div className='panel__top'>
        <div className='panel__basic-actions' />
        <div className='panel__switcher' />
      </div>
      <div className='editor-row'>
        <div className='editor-canvas'>
          <div id='gjs'>
            <h1>Hello World</h1>
          </div>
        </div>
        <div className='panel__right'>
          <div className='layers-container' />
          <div className='styles-container' />
        </div>
      </div>
      <div id='blocks' />
    </div>
  )
}

export default () => withAuthWrapper(Editor)
