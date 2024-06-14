# Block Context
This feature is used to pass values from a parent block to a child block. It is similar to React Context, where a parent component provides values that a child component can consume. By using this Context feature, we will be able to pass values from parent to child blocks.

Here, I will explain this with an example used in this plugin. I need to pass the team member's name and bio color into the child block, so I will use the context method.

**Parent Block Json block.json File**
```
"providesContext": {
  "block-context/team-members-namecolor": "nameColor",
  "block-context/team-members-biocolor": "bioColor"
},
"attributes": {
  "columns": {
    "type": "number",
    "default": 2
  },
  "nameColor": {
    "type": "string"
  },
  "bioColor": {
    "type": "string"
  }
}
```

**Child Block index.js File**
```
usesContext: [ 'block-context/team-members-namecolor', 'block-context/team-members-biocolor' ],
```

**Child Block index.js File**
```
const nameStyle = {};
context[ 'block-context/team-members-namecolor' ] && ( nameStyle.color = context[ 'block-context/team-members-namecolor' ] );

const bioStyle = {};
context[ 'block-context/team-members-biocolor' ] && ( bioStyle.color = context[ 'block-context/team-members-biocolor' ] );
```

**Reference Udemy Video:** https://www.udemy.com/course/gutenberg/learn/lecture/30635166#learning-tools
**Reference WordPress Guide:** https://developer.wordpress.org/block-editor/reference-guides/block-api/block-context/
