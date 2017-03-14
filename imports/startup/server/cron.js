import { SyncedCron } from 'meteor/percolate:synced-cron';
import { SliderValues } from '../../api/sliderValues/slidervalues';

SyncedCron.add({
  name: 'Remove old users',
  schedule(parser) {
    return parser.text('every 24 hours');
  },
  job() {
    const today = new Date();
    const MS_PER_MINUTE = 60000;
    const targetDate = new Date(today - (60 * 24 * MS_PER_MINUTE));
    SliderValues.remove({ createdAt: { $lt: targetDate } });
  },
});

SyncedCron.start();
