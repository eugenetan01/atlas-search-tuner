import { H3, Subtitle, Description } from "@leafygreen-ui/typography";
import Card from "@leafygreen-ui/card";
import { palette } from '@leafygreen-ui/palette';
import Tooltip from '@leafygreen-ui/tooltip';

function Results({openModal,textFields}){
    const modalContent = {
        title:"Show search results / Set query path",
        content:`You will want to search within specific attributes/fields and display them to your users.
        When you configure your search index and queries you will specify how document fields should be treated.
        `,
        links:[
            {label:"Define field mappings",url:"https://www.mongodb.com/docs/atlas/atlas-search/define-field-mappings/"},
            {label:"Search query path",url:"https://www.mongodb.com/docs/atlas/atlas-search/text/#syntax"},
        ],
        fields:textFields,
        type:"text"
    }

    return (
        <>
        <div onClick={() => openModal(modalContent)} style={{cursor: "pointer"}}>
            <H3>Search Results</H3>
            {[...Array(3)].map((e, i) => 
                <Card key={i} style={{marginBottom:"20px"}}>
                    <Subtitle key={`${i}title`} style={{width:"65%",borderRadius:"5px",backgroundColor:palette.black,marginBottom:"15px"}}>&nbsp;</Subtitle>
                    <div key={`${i}desc`} weight="regular" as="div">
                    {[...Array(3)].map((e, j) => 
                        <>
                            <p key={`${i}${j}`} style={{borderRadius:"5px", backgroundColor:palette.gray.base, width:"80%"}}>&nbsp;</p>
                        </>
                    )}
                    </div>
                    {[...Array(3)].map((e, j) => 
                        <>
                            <p key={`${i}${j}`} style={{
                            display: "grid",
                            gridTemplateColumns: "15% 30%",
                            gap: "10px",
                            paddingTop:"10px"}}>
                                <span key={`${i}${j}_0`} style={{borderRadius:"5px", backgroundColor:palette.black}}>&nbsp;</span>
                                <span key={`${i}${j}_1`} style={{borderRadius:"5px", backgroundColor:palette.gray.base}}>&nbsp;</span>
                            </p>
                            {/* <br/> */}
                        </>
                    )}
                </Card>
            )}
        </div>
      </>
    )
}

export default Results;