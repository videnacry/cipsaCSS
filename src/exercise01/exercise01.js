import './exercise01.css'

export const Exercise01 = () => {
    
    return(
        <div className='exercise01'>
			<div id="primero">
				<p>Lorem ipsum dolor sit amet, <a href="#">consectetuer adipiscing elit</a>.
				Praesent blandit nibh at felis. Sed nec diam in dolor vestibulum aliquet. Duis
				ullamcorper, nisi non facilisis molestie, <em>lorem sem aliquam nulla</em>, id
				lacinia velit mi vestibulum enim.
				</p>
			</div>

			<div className="normal">
				<p>
				Phasellus eu velit sed lorem sodales egestas. Ut feugiat. <span>
				<a href="#">Donec porttitor</a>, magna eu varius luctus,</span> metus massa
				tristique massa, in imperdiet est velit vel magna. Phasellus erat. Duis risus.
				<a href="#">Maecenas dictum</a>, nibh vitae pellentesque auctor, tellus velit
				consectetuer tellus, tempor pretium felis tellus at metus.
				</p>
				
				<p>
				Cum sociis natoque <em className="especial">penatibus et magnis</em> dis
				parturient montes, nascetur ridiculus mus. Proin aliquam convallis ante.
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
				turpis egestas. Nunc aliquet. Sed eu metus. Duis justo.
				</p>
				
				<p>
				Donec facilisis blandit velit. Vestibulum nisi. Proin volutpat, <em
				className="especial">enim id iaculis congue</em>, orci justo ultrices tortor, <a
				href="#">quis lacinia eros libero in eros</a>. Sed malesuada dui vel quam.
				Integer at eros.
				</p>
			</div>
        </div>
    )
}