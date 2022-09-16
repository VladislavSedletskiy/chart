import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalServiceUpdate {

  isVisibleUpdate$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isVisibleUpdate$.next(true)
  }

  close() {
    this.isVisibleUpdate$.next(false)
  }
}
