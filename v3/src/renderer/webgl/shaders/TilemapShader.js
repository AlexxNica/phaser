module.exports = {
    vert: [
        'uniform mat4 u_view_matrix;',
        'uniform vec2 u_scroll;',
        'attribute vec2 a_position;',
        'attribute vec2 a_tex_coord;',
        'varying vec2 v_tex_coord;',
        'void main () {',
        '   gl_Position = u_view_matrix * vec4(a_position + u_scroll, 1.0, 1.0);',
        '   v_tex_coord = a_tex_coord;',
        '}'
    ].join('\n'),
    frag: [
        'precision mediump float;',
        'uniform sampler2D u_sampler2D;',
        'varying vec2 v_tex_coord;',
        'void main() {',
        '   gl_FragColor = texture2D(u_sampler2D, v_tex_coord);',
        '}'
    ].join('\n')
};
