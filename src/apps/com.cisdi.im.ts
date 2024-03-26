import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cisdi.im',
  name: '轻推',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['im.qingtui.app.ui.activity.MainActivity'],
      rules: [
        {
          matches: 'LinearLayout > @TextView[text=`稍后`]',
          snapshotUrls: [
            'https://i.gkd.li/import/14659011',
          ],
        },
      ],
    },
  ],
});
