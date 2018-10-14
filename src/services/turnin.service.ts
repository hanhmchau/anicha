import * as format from 'date-fns/format';
import Difficulty from 'src/models/difficulty';

const turnin = (chosenDiff: Difficulty | undefined, username: string | undefined = '####') => {
    return `[color=#d24dff]🎧[b] Challenge Start Date: [/b] 01/01/2018
    🎤[b] Challenge Finish Date: [/b] ${format(new Date(), "DD/MM/YYYY")}
    🎖️[b] Link to your completed anime list: [/b]https://myanimelist.net/animelist/${username}?status=2
    🔗[b] Completed Anime (at sign-up): [/b] <old_number>
    🗿[b] Completed Anime (at turn-in): [/b] <new_number>
    
    🔒[b] Link to your sign-up form: [/b] <msgid_link>
    🔺[b] Difficulty: [/b] ${chosenDiff ? chosenDiff.name : ''}
    🔻[b] Restriction: [/b] <restriction_used> (Optional)
    [/color]`
};

export default turnin;