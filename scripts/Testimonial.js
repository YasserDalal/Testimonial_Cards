import { renderComments, recommendationContainer, encouragementContainer, addCommentOne } from "./renders/Render.js";

import { addedButtonToggle } from "./Choices.js";

import { persons1, persons2, persons3, persons4 } from "../data/data.js";
import { pickPersons } from "./Persons.js";

addedButtonToggle()

addCommentOne()

renderComments(persons1, persons2)

recommendationContainer(persons3)

encouragementContainer(persons4)