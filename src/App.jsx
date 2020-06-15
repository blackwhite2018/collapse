import React from 'react';
import Collapse from './components/Collapse/Collapse';
import Paragraph from './components/Paragraph/Paragraph';

const App = () => (
	<>
	<Collapse
		collapseLable='Подробнее'
		expandedLable='Скрыть'
	>
		<Paragraph>
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
			terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
			labore wes anderson cred nesciunt sapiente ea proident.
    	</Paragraph>
	</Collapse>
	</>
);

export default App;
