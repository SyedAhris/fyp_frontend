import { Signal } from "./Signal";
import { Location} from "./Location";

export interface Intersection {
    _id: string;
    name: string;
    location: Location;
    signals: Signal[];
}
